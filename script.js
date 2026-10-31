document.addEventListener("DOMContentLoaded", () => {


    const nameInput = document.getElementById("visitor-name");
    const greetButton = document.getElementById("greet-button");
    const greeting = document.getElementById("greeting");
    const themeButton = document.getElementById("theme-button");

    function greetVisitor() {
         const name = nameInput.value.trim();
        if (name == "") {
            greeting.textContent = "Please enter your name.";
            
        }
        else {
            greeting.textContent = "Hi, " + name + "!";
        }
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "Switch to Light Theme";
        } else {
            themeButton.textContent = "Change theme";
        }
    }
    if (greetButton) {
        greetButton.addEventListener("click", greetVisitor);
    }
    if (themeButton) {
        themeButton.addEventListener("click", toggleTheme);
    }
});