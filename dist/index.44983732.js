const searchLogo = document.querySelector(".search-logo");
const placeHolder = document.querySelector(".search-placeholder");
const searchContainer = document.getElementById("toolbar-search");
searchContainer.addEventListener("focus", function() {
    placeHolder.classList.add("hide");
    searchLogo.classList.add("hide");
});
searchContainer.addEventListener("blur", function() {
    if (searchContainer.value === "") {
        placeHolder.classList.remove("hide");
        searchLogo.classList.remove("hide");
    }
});

//# sourceMappingURL=index.44983732.js.map
