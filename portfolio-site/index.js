const btn = document.getElementById("theme-button");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const sunBtn = document.getElementById("choose-light-theme-button");
const moonBtn = document.getElementById("choose-dark-theme-button");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark-theme") {
  document.body.classList = "dark-theme";
  sunBtn.style.display = "visible";
  moonBtn.style.display = "none";
  console.log("first dark theme selected");
}
 else if (prefersDarkScheme.matches && currentTheme !== "light-theme") {
  document.body.classList = "dark-theme";
  sunBtn.style.display = "visible";
  moonBtn.style.display = "none";
  console.log("second dark theme selected");
}
else {
  document.body.classList = "light-theme";
  sunBtn.style.display = "none";
  moonBtn.style.display = "visible";
  console.log("light theme selected");
};

moonBtn.addEventListener("click", () => {
  document.body.classList = "dark-theme";
  moonBtn.style.display = "none";
  sunBtn.style.display = "block";
  let theme = document.body.classList;
  localStorage.setItem("theme", theme);
  console.log("moon button clicked, dark theme active");
});

sunBtn.addEventListener("click", () =>
{
  document.body.classList = "light-theme";
  sunBtn.style.display = "none";
  moonBtn.style.display = "block";
  let theme = document.body.classList;
  localStorage.setItem("theme", theme);
  console.log("sun button clicked, light theme active");
});

// if (currentTheme == "dark") {
//   document.body.classList.toggle("dark-theme");
//   sunBtn.style.display = "visible";
//   moonBtn.style.display = "none";
// } else if (currentTheme == "light") {
//   document.body.classList.toggle("light-theme");
//   sunBtn.style.display = "none";
//   moonBtn.style.display = "visible";
// }

// moonBtn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     sunBtn.style.display = "visible";
//     moonBtn.style.display = "none";
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";

//   } else {
//     sunBtn.style.display = "none";
//   moonBtn.style.display = "visible";
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";

//   }
//   localStorage.setItem("theme", theme);
// });
// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     sunBtn.style.display = "visible";
//     moonBtn.style.display = "none";
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";

//   } else {
//     sunBtn.style.display = "none";
//   moonBtn.style.display = "visible";
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";

//   }
//   localStorage.setItem("theme", theme);
// });
