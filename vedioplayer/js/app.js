// UI
const video = document.getElementById("video");

const play = document.getElementById("play"),
    stop = document.getElementById("stop"),
    progress = document.getElementById("progress"),
    timestamp = document.getElementById("timestamp");


// play & Pause vedio
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
}

// Update Play & Pause Icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    }else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

function updateprogress(){
    // console.log(video.currentTime);
    // console.log(video.duration);

    progress.value = (video.currentTime/video.duration)*100;

    // get minutes
    let min = Math.floor(video.currentTime / 60);

    if(min < 10 ){
        min = "0"+min;
    }

    // get seconds
    let sec = Math.floor(video.currentTime  % 60);

    if(sec < 10 ){
        sec = "0"+sec;
    }

    timestamp.textContent = `${min}:${sec}`;
}

// Stop Video
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}
// Set Video Timeto Progress

function setvideoprogress(){
    video.currentTime = (progress.value * video.duration) / 100;
}



// Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);

// 10VDO WDF

