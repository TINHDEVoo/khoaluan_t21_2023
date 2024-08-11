function anhien() {
    var content = document.getElementById("nav-menu");
    var logo = document.getElementById("logo");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        logo.style.display = "none";
    } else {
        content.style.display = "none";
        logo.style.display = "block";
    }
}