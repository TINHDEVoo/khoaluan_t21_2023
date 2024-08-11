(function () {
    emailjs.init("6pmYBvHWQ39M2mbi1");
})();
function guilienhe(event) {
    event.preventDefault()

    var hoten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var loinhan = document.getElementById("loinhan").value;
    var sdt = document.getElementById("sdt").value;
    if (hoten == "" || email == "" ||
        sdt == "" || loinhan == "") {
        alert("Mời bạn nhập đầy đủ ô!");
    }
    else {
        var message = "Email: " + email + "\n" + "Số Điện Thoại: " + sdt + "\n" + "Lời Nhắn: " + loinhan;
        emailjs.send("service_wk33gjl", "template_9ws05je", {
            name: hoten,
            message: message,
        })
            .then(
                function (response) {
                    console.log("Email sent successfully:", response);
                    alert("Liên Hệ thành công");
                },
                function (error) {
                    console.error("Error sending email:", error);
                    alert("Liên Hệ Thất Bại");
                }
            );
    }
}
