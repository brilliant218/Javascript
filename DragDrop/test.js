function load() {
    var support = document.getElementById("support");
    if (window.File && window.FileReader && window.FileList) {

        support.innerHTML = "support file operation";
    } else {
        support.innerHTML = "not support";
    }
}

function dragOver(ev) {
    ev.preventDefault();
}

function drop(ev) {
    var fileList = ev.dataTransfer.files;
    for (var i = 0; i < fileList.length; i++) {
        var node = document.createElement("p");
        node.innerHTML = fileList[i].name;
        ev.target.appendChild(node);
    }
    ev.preventDefault();
}