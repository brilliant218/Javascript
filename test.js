function ShowConfirmDialog() {
    var selection = confirm("Is ok to reboot?");
    var text = document.getElementById("msgText");
    if (selection) {
        text.innerHTML = "Yes";
    } else
        test.innerHTML = "No";
}

function Draw2D_Line() {
    var canvas = document.getElementById("drawPanel");
    var context = canvas.getContext('2d');
    context.lineTo(20, 20);
    context.lineTo(100, 100);
    context.lineWidth = 2;
    context.strokeStyle = "#ff0000";
    context.stroke();
}

function Draw2D_FillRect() {
    var canvas = document.getElementById("drawPanel");
    var context = canvas.getContext('2d');
    context.fillStyle = "#ff0000";
    context.fillRect(20, 20, 100, 100);
}

function Draw2D_StrokeRect() {
    var canvas = document.getElementById("drawPanel");
    var context = canvas.getContext('2d');
    context.strokeStyle = "#ff0000";
    context.strokeRect(20, 20, 100, 100);
}

function Draw2D_Star() {
    var canvas = document.getElementById("drawPanel");
    var context = canvas.getContext("2d");
    context.beginPath();
    //设置是个顶点的坐标，根据顶点制定路径
    for (var i = 0; i < 5; i++) {
        context.lineTo(Math.cos((9 + i * 36) / 90 * Math.PI) * 100 + 100, -Math.sin((9 + i * 36) / 90 * Math.PI) * 100 + 100);
        context.lineTo(Math.cos((27 + i * 36) / 90 * Math.PI) * 40 + 100, -Math.sin((27 + i * 36) / 90 * Math.PI) * 40 + 100);
    }
    context.closePath();
    //设置边框样式以及填充颜色(默认)
    context.lineWidth = "3";
    context.fillStyle = "#F6F152";
    context.strokeStyle = "#F5270B";
    context.fill();
    context.stroke();
}

function Transform() {
    var canvas = document.getElementById("drawPanel");
    var context = canvas.getContext('2d');
    context.rect(0, 0, 100, 100);

    context.lineWidth = "5";
    context.fillStyle = "#2be100";
    context.strokeStyle = "#456789";
    context.fill();
    context.stroke();

    //保存默认样式
    context.save();
    context.scale(0.1, 0.1);
    context.lineWidth = "10";
    context.strokeStyle = "#ff0000";
    context.strokeRect(100, 100, 100, 100);


    //恢复默认样式
    context.restore();

    context.save();
    context.rotate(Math.PI / 4);
    context.fillStyle = "#00ff00";
    context.fillRect(400, 400, 100, 100);
    context.restore();

}

function mouseover() {
    var button = document.getElementById("btn");
    btn.backgroundColor = "#ff0000";
}

function mouseout() {
    var button = document.getElementById("btn");
    btn.backgroundColor = "#00ff00";
}