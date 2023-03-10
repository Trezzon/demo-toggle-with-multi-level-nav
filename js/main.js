// js file

console.log("connected");

const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show-nav");
});