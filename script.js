document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const userType = document.getElementById("user-type").value;
        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;
        
        if (email && password) {
            alert(`Logging in as ${userType}...`);
            // Here you can redirect based on userType or send login data to backend
            window.location.href = userType === "athlete" ? "athlete_dashboard.html" : "coach_dashboard.html";
        } else {
            alert("Please fill in all fields");
        }
    });
});
