const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const shuffleBtn = document.querySelector("#shuffle");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const timeElapsed = document.querySelector("#current-time");
const timeRemaining = document.querySelector("#time-remaining");
const totalTime = document.querySelector("#total-time");
const cover = document.querySelector("#cover");
const themeSwitch = document.getElementById("theme-SwitchBtn");
const themeText = document.getElementById("theme-text");
const themeIcon = document.getElementById("theme-Icon");
const body = document.body;

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEFfv17qInmHsAGzmzpSX2c4n2iZTrYq4",
  authDomain: "waveio-a1bed.firebaseapp.com",
  databaseURL: "https://waveio-a1bed-default-rtdb.firebaseio.com",
  projectId: "waveio-a1bed",
  storageBucket: "waveio-a1bed.appspot.com",
  messagingSenderId: "445411477256",
  appId: "1:445411477256:web:072289227a475862db8ebd",
  measurementId: "G-JM23N99JD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference
const storage = getStorage(app);
const storageReference = ref(storage)


const online = true;

// The variables for the program

const darkIconSvg = `<title/>
                <path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="#1E1B24"/>`;
const lightIconSvg = `<title/>
                <circle cx="12" cy="12" fill="#1E1B24" r="5"/><path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="#1E1B24"/>
                <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="#1E1B24"/>
                <path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="#1E1B24"/>
                <path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="#1E1B24"/>
                <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="#1E1B24"/>
                <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="#1E1B24"/>
                <path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="#1E1B24"/>
                <path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="#1E1B24"/>`;

var songIndex = 0;
var playPromise = audio.play();

var setShuffle = false;
let shufflePlaylist = [];

// Creating a reference to the songs in the current Firebase Storage center

// Initially Load Songs into DOM
loadSong(songList[songIndex]);

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
 
  if (online) {

    getDownloadURL(ref(storage, `Music/${song.title}.mp3`)).then((url) => {
      audio.setAttribute('src', url);
    }).catch((error) => {

    });
    getDownloadURL(ref(storage, `Images/${song.artist}/${song.album}.png`)).then((url) => {
      cover.setAttribute('src', url);
    }).catch((error) => {

    });

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic Playback started
        // Safely Pause Audio
        pauseSong()
      }).catch((error) => {
        // Auto-Playing prevented
        pauseSong()
        playSong()
        console.log("We should not be playing!")
        console.log(error)
      });
    }
  } else {
    // Server is offline
  }
}

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  
  audio.play()
}

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  
  audio.pause()
}



function prevSong() {
  songIndex--
  
  if (songIndex < 0) {
    songIndex = songList.length - 1
  }
  
  loadSong(songList[songIndex])

  playSong()
}

function nextSong() {
  if (setShuffle) {
    songIndex = (songIndex + 1) % shufflePlaylist.length;
    loadSong(songList[songIndex])
  } else {
      
    songIndex++
        
    if (songIndex > songList.length - 1) {
      songIndex = 0
    }
    
    console.log("About to Load Song")
    loadSong(songList[songIndex])
    console.log("Song Loaded, Ready, Fire!!!")
    playSong()    
  }
  
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime / duration) * 100

  var seconds = Math.round(currentTime % 60);
  var foo = currentTime - seconds;
  var minutes = Math.round(foo / 60);
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  var fixedCurrentTime = minutes + ":" + seconds;

  timeElapsed.innerText = fixedCurrentTime;
  
  var seconds = Math.round(((duration - currentTime) % 60) - 1);
  var foo = (duration - currentTime) - seconds;
  var minutes = Math.round(foo / 60);
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  var fixedRemainingTime = minutes + ":" + seconds;

  timeRemaining.innerText = fixedRemainingTime;

  var seconds = Math.round(duration % 60);
  var foo = duration - seconds;
  var minutes = Math.round(foo / 60);
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  var fixedDurationTime = minutes + ":" + seconds;

  totalTime.innerText = fixedDurationTime;

  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX;
  const duration = audio.duration
  
  audio.currentTime = (clickX / width) * duration
}

// Shuffles the array using the fisher-yates algorithm

function FisherYates(array) {
  let shuffle = array.slice(); // creates a copy of our array
  for (let i = shuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }

  return shuffle;
}

function shuffleSong() {
  setShuffle = !setShuffle;
  if (setShuffle) {
    shufflePlaylist = FisherYates(songList);
  } else {
    shufflePlaylist = [];
  }
}

/*
 Add shuffle song code here
function shuffleSong() {
  if (!setShuffle) {
    setShuffle = true
  }

  pauseSong()

  songIndex = Math.floor(Math.random() * songList.length) + 1;

  nextSong()
}
*/

function switchTheme() {
  if (body.classList == 'dark') {
    body.classList.replace('dark', 'light');
    themeText.textContent = "Dark";
    themeIcon.innerHTML = darkIconSvg;
  } else if (body.classList == 'light') {
    body.classList.replace('light', 'dark');
    themeText.textContent = "Light";
    themeIcon.innerHTML = lightIconSvg;
  }
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change Song
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
shuffleBtn.addEventListener('click', shuffleSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

themeSwitch.addEventListener('click', switchTheme)

