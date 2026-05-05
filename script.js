const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.onclick = () => {
    navLinks.classList.toggle("active");
};