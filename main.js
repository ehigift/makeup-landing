window.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", () => {
        const sideMenu = document.querySelector(".side-menu");

        console.log("hey")

        sideMenu.classList.toggle("hide");
    })


})