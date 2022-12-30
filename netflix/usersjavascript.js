function kontrol() {
  var n1 = document.getElementById("floatingInput").value;
  var n2 = document.getElementById("floatingPassword").value;
  var n3 = document.getElementById("demo1");
  var n4 = document.getElementById("demo2");
  var n5 = document.getElementById("demo3");

  if (n1 == "") {
    n4.style.color = "red";
    n4.innerHTML = "";
    n3.innerHTML = "";
    n4.innerHTML = "Telefon Numaranızı ve e-posta adresinizi giriniz.";
  } else {
    n4.innerHTML = "";
  }
  if (n2.length < 4 || n2.length > 60) {
    n3.innerHTML = "";
    n5.style.color = "red";
    n5.innerHTML = "Parolanız en 4 ila 60 karakter olmalıdır.";
  } else {
    n5.innerHTML = "";
  }
  if (n1 != "" && n2 != "" && n2.length >= 4 && n2.length <= 60) {
    n3.style.color = "#00e600";
    n3.innerHTML = "Başarıyla Giriş Sağladınız. ✔️";
    n5.innerHTML = "";
    n4.innerHTML = "";
  }
}
