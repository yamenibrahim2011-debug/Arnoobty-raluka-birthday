let currentMemory = 1;
function startSurprise(){

    document.querySelector(".container").classList.add("hidden");

    document.getElementById("message").classList.remove("hidden");

}
function startSurprise() {

    const music = document.getElementById("birthdayMusic");

    music.volume = 0.5;

    music.play();


    document.querySelector(".container").style.display = "none";


    const message = document.getElementById("message");

    message.classList.remove("hidden");


    setTimeout(() => {

        document.getElementById("gallery").classList.remove("hidden");

        showMemories();

    }, 10000);

}


function showMemories() {

    const image = document.getElementById("memoryImage");
    const text = document.getElementById("memoryText");


    setInterval(() => {

    currentMemory++;

   if(currentMemory <= 24){

    image.style.opacity = 0;

    setTimeout(() => {

        image.src = "photos/photo" + currentMemory + ".jpg";

        text.innerHTML = "Memory " + currentMemory + " 🤍";

        image.style.opacity = 1;

    }, 1500);


} else {

    document.getElementById("gallery").classList.add("hidden");

    setTimeout(() => {
        document.getElementById("videos").classList.remove("hidden");

showVideos();
    }, 2000);

}
}, 4000);
}
let currentVideo = 1;

function showVideos() {

    const video = document.getElementById("memoryVideo");
    const text = document.getElementById("videoText");

    video.src = "video/memory" + currentVideo + ".mp4";

    video.play();


    video.onended = function() {

    currentVideo++;

    if(currentVideo <= 8){

        video.src = "video/memory" + currentVideo + ".mp4";

        text.innerHTML = "Memory Video " + currentVideo + " 🤍";

        video.play();

    } else {

        document.getElementById("videos").classList.add("hidden");

        document.getElementById("finalMessage").classList.remove("hidden");

    }

}; 10000);

}
function showFinalSecret() {

    const secret = document.getElementById("secretMessage");

    secret.classList.remove("hidden");

}
