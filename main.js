window.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", () => {
        const sideMenu = document.querySelector(".side-menu");
        const sideNav = document.querySelector(".side-nav");
        console.log("hey")

        sideMenu.classList.toggle("hide");
        sideNav.classList.toggle("hide-sm");
        if (toggleBtn.textContent == "close") {
            toggleBtn.textContent = "menu";
        } else {
            toggleBtn.textContent = "close";
        }
    })


})