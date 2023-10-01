const songList = document.getElementById("song-list");

// Adding a Search Bar
const loadAllSongs = async () => {
    try {
      const result = await fetch('gs://waveio-a1bed.appspot.com/Images');
      let hpSongs = await result.json();
      displaySongs(hpSongs);
      console.log(hpSongs);
    } catch (err) {
      console.error(err);
    }
  }
  
  const displaySongs = (songs) => {
    const htmlString = songs
      .map((song) => {
        return `
        <li class="song">
          <h2>${song.name}</h2>
          <p>Artist: </p>
          <p>Length:</p>
          <img src="${song.cover}"></img>
        </li>
      `;
      })
      .join('');
    songList.innerHTML = htmlString;
  }
  
  loadAllSongs()