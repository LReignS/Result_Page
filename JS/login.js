function login() {
    var un = document.getElementById("1").value;
    var ps = document.getElementById("2").value;
    if (ps == "pass" && un == "admin") {
        redir(un);
    } else
    if (un == "admin" && ps != "pass") {
        alert("Username and Password does not match");
    } else
    if (un != 'admin') {
        alert("Username not found!");
    }
}

function redir(a) {
    window.location = "page1.html";
}