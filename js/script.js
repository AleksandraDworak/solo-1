

function toggleMenu(visible) {
  document.querySelector(".sidebar").classList.toggle("show", visible)
}

document.querySelector(".dropdown-button").addEventListener("click", function(e) {
  e.preventDefault();
  toggleMenu();
});