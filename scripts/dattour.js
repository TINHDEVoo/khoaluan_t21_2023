(function () {
    emailjs.init("6pmYBvHWQ39M2mbi1");
})();
function dattour(event){
    event.preventDefault()

    var hoten = document.getElementById("hoten").value;
    var diachi = document.getElementById("diachi").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var nglon = document.getElementById("nglon").value;
    var treem = document.getElementById("treem").value;
    var embe = document.getElementById("embe").value;
    var tour = document.getElementById("tour").value;
    var magiamgia = document.getElementById("magiamgia").value;
    if(hoten=="" || diachi =="" || email==""||
    sdt==""|| nglon ==""|| treem ==""|| embe==""||tour==""
    || magiamgia==""){
        alert("Mời bạn nhập đầy đủ ô!");
    }
    else{
        if(document.getElementById("chuyentie1").checked==false && document.getElementById("chuyentie2").checked==false){
            alert("Mời chọn phương thức thanh toán!");
        }
        else{
            if( document.getElementById("chuyentie1").checked == true){
                var thanhtoan = "Chuyển Khoản";
            }
            else{
                var thanhtoan = "Không Chuyển Khoản";
            }
            var message = "Email: " + email + "\n"+ "Địa Chỉ: "+diachi +"\n"+ "Số Điện Thoại: "+ sdt + "\n"+ "Người Lớn: "+nglon +"\n"+"Trẻ Em: "+ treem + "\n"+"Em Bé: "+embe+"\n"+"Tour: " + tour +"\n"+ "Mã giảm: "+magiamgia + "\n"+"Ngày Khởi Hành"+ngaykhoihanh +"\n"+"Ngày Dự Kiến: "+ ngaydukien + "\n"+"Thanh Toán: "+thanhtoan;
            emailjs.send("service_wk33gjl", "template_9ws05je", {
                name: hoten,
                message: message,
            })
            .then(
                function(response) {
                    console.log("Email sent successfully:", response);
                    alert("Đặt tour thành công, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!");
                },
                function(error) {
                    console.error("Error sending email:", error);
                    alert("Đặt Tour Thất Bại");
                }
            );
        }
    }
}