var btnSearch = document.querySelector(".btn-to-search");
var popup = document.querySelector(".popup-form");

btnSearch.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("popup-form-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("popup-form-show")) {
      popup.classList.remove("popup-form-show"); }
  }
});
