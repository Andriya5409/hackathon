document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username") || "User";
    document.getElementById("username").innerText = username;

    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("username");
        alert("Logged out successfully!");
        window.location.href = "login.html"; 
    });

    window.explore = function () {
        window.location.href = "exams.html"; 
    };

    window.startNow = function () {
        window.location.href = "courses.html"; 
    };
});
