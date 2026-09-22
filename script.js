const openButton = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const rsvpButton = document.getElementById("rsvpButton");
const weddingDate = new Date("December 25, 2026 19:00:00").getTime();
const weddingMusic = document.getElementById("weddingMusic");

openButton.addEventListener("click", function(){

    document.querySelector(".welcome-screen").style.display = "none";

    invitation.style.display = "flex";

    weddingMusic.play();

});

setInterval(function() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000*60*60*24));
    const hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((difference % (1000*60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);


rsvpButton.addEventListener("click", function(){
    alert("Thank you for your RSVP! ❤️");
});