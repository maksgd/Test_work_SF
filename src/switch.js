const switchBtn = document.querySelector(".switch-btn");
const switchText = document.querySelector(".switch__text");

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("switch-on");
});

switchText.addEventListener("click", () => {
  switchBtn.classList.toggle("switch-on");
});
