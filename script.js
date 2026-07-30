function startSurprise() {

    document.querySelector(".container").style.display = "none";

    const message = document.getElementById("message");
    message.classList.remove("hidden");

    const music = document.getElementById("birthdayMusic");

    music.play();

}
