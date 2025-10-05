
const playerImg = document.getElementById("players");
const stopBtn = document.getElementById("stop-btn");
const reverseBtn = document.getElementById("reverse-btn");
const audio = document.getElementById("song");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");

let isPlaying = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0"+secs : secs}`;
}


playerImg.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playerImg.src = "resources/Play_fill.svg";
    playerImg.classList.add("active"); 
    isPlaying = true;
  } else {
    audio.pause();
    playerImg.src = "resources/Play_fill.svg";
    playerImg.classList.remove("active");  
    isPlaying = false;
  }
});


stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  playerImg.src = "resources/Play_fill.svg";
  playerImg.classList.remove("active");
  progress.style.width = "0%";
  currentTimeEl.textContent = "0:00";
  isPlaying = false;
});
reverseBtn.addEventListener("click", () => {
  
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});
// fagshdubcbchcb

audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percentage + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("ended", () => {
  playerImg.src = "resources/Play_fill.svg";
  playerImg.classList.remove("active");
  progress.style.width = "0%";
  currentTimeEl.textContent = "0:00";
  isPlaying = false;
});
