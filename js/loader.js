document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    loader.style.transition = "opacity 1s ease-in-out";
    setTimeout(function () {
        loader.style.opacity = "1";
    }, 100);
});

// JavaScript code for hiding the loader and redirecting after 5 seconds
setTimeout(function () {
    window.location.href = "main.html";
}, 5000);