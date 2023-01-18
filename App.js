var toggleSwitch = document.querySelector(".checkbox");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("color-scheme", "light");
    /*If required*/
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    document.documentElement.setAttribute("color-scheme", "dark");
    /*If required*/
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);


const checkbox = document.getElementById("checkbox");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}




var coll = document.getElementsByClassName("collapsible");
var i;
            
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}