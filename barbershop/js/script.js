/**
 * Created by Polina on 11.09.2015.
 */
var link = document.querySelector(".login");
var loginWindow = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = loginWindow.querySelector("[name='login']");
var password = loginWindow.querySelector("[name='password']");
var btnSubmit = loginWindow.querySelector(".btn");

var storage = localStorage.getItem("login");


link.addEventListener("click", function(event) {
    event.preventDefault();
    loginWindow.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else
        login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    loginWindow.classList.remove("modal-content-show");
    loginWindow.classList.remove("modal-error");
});

btnSubmit.addEventListener("click", function(event) {
    if(!(login.value && password.value)) {
        event.preventDefault();
        loginWindow.classList.remove("modal-error");
        loginWindow.offsetWidth = loginWindow.offsetWidth;
        loginWindow.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        if(!(login.value && password.value)) {
            event.preventDefault();
            loginWindow.classList.remove("modal-error");
            loginWindow.offsetWidth = loginWindow.offsetWidth;
            loginWindow.classList.add("modal-error");
        } else {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
        if (loginWindow.classList.contains("modal-content-show")) {
            loginWindow.classList.remove("modal-content-show");
        }
    }
});

var mapOpen = document.querySelector(".open-map");
var modalMap = document.querySelector(".modal-content-map");
var mapClose = modalMap.querySelector(".modal-content-close");

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

