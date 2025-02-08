// 🔹 Open and Close Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// 🔹 Switch Between Login & Signup
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("form-title");

    document.getElementById("switchToSignup").addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.innerText = "Sign Up";
    });

    document.getElementById("switchToLogin").addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        formTitle.innerText = "Login";
    });

    // 🔹 Validate Form
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login Successful!");
        closeLoginModal();
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Signup Successful!");
        closeLoginModal();
    });
});
