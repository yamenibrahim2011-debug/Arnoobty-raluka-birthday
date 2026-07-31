alert("script loaded");
let currentMemory = 1;
let currentVideo = 1;

let memoryStarted = false;
let videosStarted = false;


function startSurprise() {

    alert("Button works!");



    const music = document.getElementById("birthdayMusic");

    if (music) {
        music.volume = 0.5;

        music.play().catch(() => {
            console.log("Music needs browser permission");
        });
    }


    document.querySelector(".container").style.display = "none";


    document.getElementById("message").classList.remove("hidden");


    setTimeout(() => {

        document.getElementById("gallery").classList.remove("hidden");

        showMemories();

    }, 10000);

}




function showMemories() {

    if (memoryStarted) return;

    memoryStarted = true;


    const image = document.getElementById("memoryImage");
    const text = document.getElementById("memoryText");


    setInterval(() => {


        currentMemory++;


        if (currentMemory <= 24) {


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





function showVideos() {


    if (videosStarted) return;

    videosStarted = true;



    const video = document.getElementById("memoryVideo");

    const text = document.getElementById("videoText");



    function playCurrentVideo() {


       video.src = "videos/memory" + currentVideo + ".mp4";
        
        text.innerHTML = "Memory Video " + currentVideo + " 🤍";


        video.load();

        video.play().catch(() => {

            console.log("Video waiting for play");

        });


    }



    playCurrentVideo();



    video.onended = function() {


        currentVideo++;


        if (currentVideo <= 8) {


            playCurrentVideo();



        } else {



            document.getElementById("videos").classList.add("hidden");


            document.getElementById("finalMessage").classList.remove("hidden");


        }


    };


}





function showFinalSecret() {

    document.getElementById("secretMessage").classList.remove("hidden");

    setTimeout(() => {

        document.getElementById("finalMessage").classList.add("hidden");

        document.getElementById("lastSurprise").classList.remove("hidden");

    }, 6000);

}
