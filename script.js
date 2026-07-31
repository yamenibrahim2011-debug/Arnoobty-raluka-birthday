

let currentMemory = 1;
let currentVideo = 1;

let memoryStarted = false;
let videosStarted = false;



function startSurprise() {

    
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


        startLastSurprise();


    }, 6000);


}





function startLastSurprise() {


    const title = document.getElementById("storyTitle");


    const messages = [


        "I still have one last surprise for you... 🤍",


        "For every smile you've given me...<br><br>Thank you. 🤍",


        "For every late-night conversation...<br><br>Thank you. 🌙",


        "For every Valorant game...<br><br>Even when we lost, I still had fun because it was with you. 🎮🤍",


        "For every Harry Potter night...<br><br>They became memories I'll always smile about. ⚡",


        "And finally...<br><br>Thank you for simply being you. ❤️"


    ];


    let index = 0;


    title.innerHTML = messages[index];


    const interval = setInterval(() => {


        index++;


        if (index < messages.length) {


            title.style.opacity = 0;


            setTimeout(() => {


                title.innerHTML = messages[index];

                title.style.opacity = 1;


            }, 500);



        } else {


            clearInterval(interval);


            document.getElementById("questionSection").classList.remove("hidden");


        }


    }, 3500);


}





function nextQuestion(number) {

    alert("Button clicked! Question " + number);

    const current = document.getElementById("question" + number);

    if (current) {
        current.classList.add("hidden");
    }


    const next = document.getElementById("question" + (number + 1));


    if (next) {

        next.classList.remove("hidden");

        next.scrollIntoView({
            behavior: "smooth"
        });

    }

}






function showKiss() {


    document.getElementById("questionSection").classList.add("hidden");


    document.getElementById("kissScreen").classList.remove("hidden");


}
