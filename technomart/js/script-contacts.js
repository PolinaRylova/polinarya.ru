var mapOpen = document.querySelector(".contacts-map");
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
