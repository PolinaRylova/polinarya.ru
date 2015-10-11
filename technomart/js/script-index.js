/**
 * Created by Polina on 11.09.2015.
 */
var link = document.querySelector(".write-us-btn");
var writeWindow = document.querySelector(".modal-content-write");
var close = writeWindow.querySelector(".modal-close-btn");
var login = writeWindow.querySelector("[name='login']");
var email = writeWindow.querySelector("[name='email']");
var letter = writeWindow.querySelector("[name='letter']");
var btnSubmit = writeWindow.querySelector("[name='letter-btn']");

link.addEventListener("click", function(event) {
    event.preventDefault();
    writeWindow.classList.add("modal-content-show");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    writeWindow.classList.remove("modal-content-show");
    writeWindow.classList.remove("modal-error");
});

btnSubmit.addEventListener("click", function(event) {
    if(!(login.value && email.value && letter.value)) {
        event.preventDefault();
        writeWindow.classList.remove("modal-error");
        writeWindow.offsetWidth = writeWindow.offsetWidth;
        writeWindow.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        if(!(login.value && email.value && letter.value)) {
            event.preventDefault();
            writeWindow.classList.remove("modal-error");
            writeWindow.offsetWidth = writeWindow.offsetWidth;
            writeWindow.classList.add("modal-error");
        }
    }
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
        if (writeWindow.classList.contains("modal-content-show")) {
            writeWindow.classList.remove("modal-content-show");
        }
    }
});

var mapOpen = document.querySelector(".open-map");
var modalMap = document.querySelector(".modal-content-map");
var mapClose = modalMap.querySelector(".modal-close-btn");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
        if (modalMap.classList.contains("modal-content-show")) {
            modalMap.classList.remove("modal-content-show");
        }
    }
});

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

var html = document.documentElement;
html.className = html.className.replace("no-js","js");

