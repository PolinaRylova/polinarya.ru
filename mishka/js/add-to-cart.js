var orderBtn = document.querySelectorAll(".btn--open-modal");
var modalCart = document.querySelector(".add-to-cart");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
  });
}

if(overlay) {
  overlay.addEventListener("click", function() {
    modalCart.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  });
}

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    modalCart.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  }
});
