// 引入 gulp及组件
//插件的引入方法 和任务建立方法参照gulp的官网插件
var gulp = require("gulp"),
autoprefixer = require("gulp-autoprefixer"),
minifycss = require("gulp-minify-css"), //压缩css
jshint = require("gulp-jshint"), //js代码校验
uglify = require("gulp-uglify"), //压缩JS
imagemin = require("gulp-imagemin"), //压缩图片
rename = require("gulp-rename"), //合并js文件
concat = require("gulp-concat"),
notify = require("gulp-notify"),
cache = require("gulp-cache"),
livereload = require("gulp-livereload"),
del = require("del");
gulpUtil = require("gulp-util");
cssspriter = require("gulp-css-spriter");
svgmin = require("svgmin");
svgSymbols = require("gulp-svg-symbols");
gulpSequence = require('gulp-sequence');
babel = require("gulp-babel"); // 用于ES6转化ES5
connect = require('gulp-connect');
 
// Clean before task running
gulp
  .task("clean", function (cb) {
    return del(["./dist/css", "./dist/js", "./dist/img"], cb);
  });

//minimize css
gulp.task("styles", function () {
  return gulp
    .src("./css/*.css")
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(minifycss())
    .pipe(gulp.dest("./dist/css_tmp"))
    .pipe(
      notify({
        message: "Styles task complete"
      })
    );
});

//concat all *.min.css
gulp.task('css-concat', function () {
  return gulp.src("./dist/css_tmp/*.min.css")
    .pipe(concat('bundle.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload({
      stream: true
    }))
})

//minize js
gulp.task("scripts1", function () {
  return gulp
    .src("./js/*.js")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(uglify())
    .pipe(concat('function.min.js'))
    .pipe(gulp.dest("./dist/js"))
    .pipe(
      notify({
        message: "Scripts task complete"
      })
    );
});

gulp.task("scripts2", function () {
  return gulp
    .src("./js/flashmsg/*.js")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(uglify())
    .pipe(concat('msgdefinition.min.js'))
    .pipe(gulp.dest("./dist/js"))
    .pipe(
      notify({
        message: "Scripts task complete"
      })
    );
});


// minimize jpg images
gulp.task("images", function () {
  return gulp
    .src("./img/*.jpg")
    .pipe(
      cache(
        imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        })
      )
    )
    .pipe(gulp.dest("./dist/img"))
    .pipe(
      notify({
        message: "Images task complete"
      })
    );
});

//pack svg 
gulp.task('svgsprites', function () {
  return gulp.src('./img/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('./dist/img'))
});

//delete temp folder
gulp.task('del_tmp', function (cb) {
  return del(["./dist/css_tmp"], cb);
});

gulp.task('copy-pwa',function(){
  return gulp.src(['index.html', 'sw.js', 'manifest.json'])
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy-common-css',function(){
  return gulp.src('./css/common/bootstrap-4.0.0.min.css')
  .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-common-js',function(){
  return gulp.src(['./js/common/bootstrap.bundle-4.1.0.js', './js/common/jquery-3.3.1.min.js', 'js/common/socket.io.js'])
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-font',function(){
  return gulp.src(['./fonts/*.*'])
  .pipe(gulp.dest('dist/fonts'));
});
 
gulp.task('webserver', function() {
    return connect.server({
        livereload: true,
        port: 2333
    });
});

// 监听文件: Watch
gulp.task("watch", function () {
  // Watch .scss files
  gulp.watch("./css/*.css", ["styles"]);
  // Watch .js files
  gulp.watch("./js/*.js", ["scripts1"]);
  // Watch .js files
  gulp.watch("./js/flashmsg/*.js", ["scripts2"]);
  // Watch image files
  gulp.watch("./img/*.jpg", ["images"]);
  // Watch image files
  gulp.watch("./img/*.svg", ["svgsprites"]);
  //copy
  gulp.watch(['index.html', 'sw.js', 'manifest.json'],['copy-pwa']);
  gulp.watch('./fonts/*.*', ['copy-font']);

  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(["./dist/**"]).on("change", livereload.changed);
});

// Default task 设置默认任务
gulp.task("default", gulp.series('clean',
  gulp.series('styles', 'css-concat'),
  gulp.parallel('scripts1', 'scripts2'),
  gulp.parallel('images', 'svgsprites'),
  gulp.parallel('copy-pwa', 'copy-common-css', 'copy-common-js','copy-font'),
  'del_tmp',
  'watch'), function (cb) {
  return cb;
});