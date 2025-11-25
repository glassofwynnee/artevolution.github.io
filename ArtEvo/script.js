 // For user input
        let userValue = "";
        let passwordValue = "";

        // Data Organizer
        const userData = {
            usernameOrEmailOrPhone: "",
            password: ""
        };


        const userInput = document.getElementById("userInput");
        const passwordInput = document.getElementById("passwordInput");
        const signupBtn = document.getElementById("signupBtn");
        const successMsg = document.getElementById("successMessage");


        userInput.addEventListener("input", () => {
            userValue = userInput.value;
        });

        passwordInput.addEventListener("input", () => {
            passwordValue = passwordInput.value;
        });

        
        signupBtn.addEventListener("click", () => {

            // Value holder
            userData.usernameOrEmailOrPhone = userValue;
            userData.password = passwordValue;

            // Validation checker
            if (userValue === "" || passwordValue === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Dynamic checker
            successMsg.style.display = "block";

            // Redirect the site to HOME
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1500);
        });