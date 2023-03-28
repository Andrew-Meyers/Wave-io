/* 



*/

const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const shuffleBtn = document.querySelector("#shuffle");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const searchBar = document.querySelector(".searchbar_input");

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

/*
getDownloadURL(ref(storage, 'Images/96 Bulls.png')).then((url) => {
  // 'url' is the download URL for 'Images/96 Bulls.png'


  You can download this directly: 
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event) => {
    const blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  

  // Or insert it into an image element or an element of your choice
  cover.setAttribute('src', url);
}).catch((error) => {
  // Handles any errors
});
*/

const online = true;

// Song Titles
const songs = [
  "96 Bulls",
  "Always",
  "BQE",
  "Clinton Hill",
  "Grateful",
  "Parked Cars",
  "Pomegranate",
  "Vamp Anthem",
  "Location",
  "I love you, I hate you",
  "Go Stupid",
  "Outside(Better Days)",
  "Super Gremlin",
  "Sky",
  "Stop Breathing",
  "On that Time",
  "Rapstar(Polo G)",
  "Capo",
  "3005",
  "Boys a Liar(pt. 2)",
  "Small Worlds",

];

var songIndex = 0;
var playPromise = audio.play();

var setShuffle = false;

// Creating a reference to the songs in the current Firebase Storage center

/*
songs.forEach(element => {

  var song = {
    name: element,
    url: getDownloadURL(ref(storage, `Music/${element}.mp3`)).then((url) => {
        return url;  
      }).catch((error) => {
        // Help with error code later
      })
  }

  var image = {
    name: element,
    url: getDownloadURL(ref(storage, `Images/${element}.png`)).then((url) => {
        return url;
      }).catch((error) => {
        // Help with error code later
      })
  }
  
  url = song.url;

  songsURLS.push(song.url);
  coverURLS.push(image.url);

}); 
*/

// Initially Load Songs into DOM
loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
 
  if (online) {

    getDownloadURL(ref(storage, `Music/${song}.mp3`)).then((url) => {
      audio.setAttribute('src', url);
    }).catch((error) => {

    });
    getDownloadURL(ref(storage, `Images/${song}.png`)).then((url) => {
      cover.setAttribute('src', url);
    }).catch((error) => {

    });

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic Playback started
        // Safely Pause Audio
        playSong();
        audio.pause();
      }).catch((error) => {
        // Auto-Playing prevented
        pauseSong();
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
    songIndex = songs.length - 1
  }
  
  loadSong(songs[songIndex])

  playSong()
}

function nextSong() {
  songIndex++
    
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }
    
  loadSong(songs[songIndex])
    
  playSong()
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX;
  const duration = audio.duration
  
  audio.currentTime = (clickX / width) * duration
}

function Wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Add shuffle song code here
function shuffleSong() {
  if (!setShuffle) {
    setShuffle = true
  }

  pauseSong()

  songIndex = Math.floor(Math.random() * songs.length) + 1;

  nextSong()
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

// Search Bar Code Here:
function SearchSong(input) {
  
}
