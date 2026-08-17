const button = document.getElementById("welcomeButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "Welcome to Simple Notes!";
});