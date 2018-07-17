function ShowConfirmDialog() {
    var selection = confirm("Is ok to reboot?");
    var text = document.getElementById("msgText");
    if (selection) {
        text.innerHTML = "Yes";
    } else
        test.innerHTML = "No";
}