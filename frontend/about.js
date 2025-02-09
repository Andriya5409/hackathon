document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("mouseover", function() {
            member.style.transform = "scale(1.1)";
            member.style.transition = "0.3s";
        });

        member.addEventListener("mouseout", function() {
            member.style.transform = "scale(1)";
        });
    });
});
