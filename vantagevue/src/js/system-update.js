function init() {}

function progressAnim(selector, gotoSelector) {
  $(selector).css({
    width: '0%'
  });
  $(selector).attr('aria-valuenow', 0);
  $(document).queue('myAnimation', []);
  let FUNC = [];
  for (let i = 0; i <= 100; i += 10) {
    let animFun = function () { progressOneAnim(selector, i, aniCB); };
    FUNC.push(animFun);
  }
  FUNC.push(function () {
    $('.su-box').removeClass('show');
    $(gotoSelector).addClass('show');
    console.log('finished')
  });
  let aniCB = function () {
    $(document).dequeue('myAnimation');
  }
  $(document).queue('myAnimation', FUNC);
  aniCB();
}

function progressOneAnim(selector, progressNum, fnc) {
  $(selector).animate({
    width: progressNum + '%'
  }, fnc);
  $(selector).attr('aria-valuenow', progressNum);
  $(selector).text(progressNum + '%');
}

$('#check-for-updates').on('click', function () {
  $('.su-box').removeClass('show');
  $('#su-search').addClass('show');
  progressAnim('#su-search .progress-bar', '#su-search-result');
})

$('#install-selected').on('click', function () {
  $('.su-box').removeClass('show');
  $('#su-installing').addClass('show');
  progressAnim('#su-installing .progress-bar', '#su-installed');
})

$('#cancel-search, #cancel-installing').on('click', function () {
  $('.su-box').removeClass('show');
  $('#su-start').addClass('show');
  $(document).queue('myAnimation', []);
})

$(function () {
  init();
});