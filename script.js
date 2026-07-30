function startSurprise() {

    const music = document.getElementById("birthdayMusic");

    music.volume = 0.5;

    music.play()
    .then(() => {
        console.log("Music started");
    })
    .catch(error => {
        console.log("Music error:", error);
    });


    document.querySelector(".container").style.display = "none";


    const message = document.getElementById("message");

    message.classList.remove("hidden");
setTimeout(() => {
    document.getElementById("gallery").classList.remove("hidden");
}, 10000);
}
