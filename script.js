let currentMemory = 1;

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

}

    }, 4000);

}
