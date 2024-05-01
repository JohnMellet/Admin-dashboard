const searchLogo = document.querySelector(".search-logo");
const placeHolder = document.querySelector(".search-placeholder");
const searchContainer = document.getElementById("toolbar-search");
const languageList = document.querySelector(".lang-list");
const profileSettings = document.querySelector(".account-settings");
const langSelector = document.getElementById("lang-selector");
const profileSelector = document.querySelector(".toolbar-pic");

searchContainer.addEventListener("focus", function () {
  placeHolder.classList.add("hide");
  searchLogo.classList.add("hide");
});

searchContainer.addEventListener("blur", function () {
  if (searchContainer.value === "") {
    placeHolder.classList.remove("hide");
    searchLogo.classList.remove("hide");
  }
});

langSelector.addEventListener("click", function () {
  languageList.classList.toggle("hide");
});

profileSelector.addEventListener("click", function () {
  profileSettings.classList.toggle("hide");
});
