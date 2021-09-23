var kiri = document.getElementsByClassName("kiri")[0];
var kanan = document.getElementsByClassName("kanan")[0];

$(window).resize(function () {
  if (window.innerWidth <= 992) {
    kiri.classList.add("order-last");
    kanan.classList.add("order-first");
  } else {
    kiri.classList.remove("order-last");
    kanan.classList.remove("order-first");
  }
});
