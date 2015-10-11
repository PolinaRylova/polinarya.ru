var cartOpen = document.querySelector(".open-cart");
var modalCart = document.querySelector(".modal-content-cart");
var cartClose = modalCart.querySelector(".modal-close-btn");
var cancel = modalCart.querySelector(".cart-cancel");

cartOpen.addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.add("modal-content-show");
});

cartClose.addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.remove("modal-content-show");
});

cancel.addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
        if (modalCart.classList.contains("modal-content-show")) {
            modalCart.classList.remove("modal-content-show");
        }
    }
});
