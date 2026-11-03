document.addEventListener("DOMContentLoaded", () => {


    const nameInput = document.getElementById("visitor-name");
    const greetButton = document.getElementById("greet-button");
    const greeting = document.getElementById("greeting");
    const themeButton = document.getElementById("theme-button");

    const goals = ["Learn JavaScript", "Practice Git"];
    const goalForm = document.getElementById("goal-form");
    const goalInput = document.getElementById("goal-input");
    const goalList = document.getElementById("goal-list");
    const goalCount = document.getElementById("goal-count");
    const goalMessage = document.getElementById("goal-message");

    function renderGoals() {
        goalList.replaceChildren();
        goals.forEach(function (goal, index) {
            const item = document.createElement("li");
            const label = document.createElement("span");
            label.textContent = goal;
            item.append(label);
            const RemoveBtn =document.createElement("button");
            RemoveBtn.type = "button";
            RemoveBtn.textContent = "Remove";
            RemoveBtn.setAttribute("aria-label", "Remove " + goal);
            RemoveBtn.addEventListener("click", function () {
                goals.splice(index, 1);
                renderGoals();
            });
            item.append(RemoveBtn);
            goalList.append(item);
        });
        goalCount.textContent = "Goals: " + goals.length;
    }

    renderGoals();
    window.renderGoals = renderGoals;

    goalForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const text = goalInput.value.trim();
        if (text === "") {
            goalMessage.textContent = "Enter a goal first.";
            return;
        }
        goals.push(text);
        renderGoals();
        goalInput.value = "";
        goalMessage.textContent = " Goal added.";
        goalInput.focus(); 
    })




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