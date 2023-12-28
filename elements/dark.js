const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const marquee = document.querySelector(".marquee");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  marquee.classList.toggle("dark-theme");
} 
else if (currentTheme == "light") {
  marquee.classList.toggle("light-theme");
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    
    var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    
  } 
  else {
    document.body.classList.toggle("dark-theme");
    
    var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});


