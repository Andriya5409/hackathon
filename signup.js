document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Dummy sign-up logic
    alert("Sign-up Successful!");
    
    // Redirect to login page after signing up
    window.location.href = "login.html";
});
