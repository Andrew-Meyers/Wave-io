class Song {
    constructor(title, artist = [], album = null) {
        this.title = title;
        this.artist = artist;
        this.album = album;
    }

}

class Artist {
    constructor(name, genre = null, albums = [], songs = []) {
        this.name = name;
        this.genre = genre;
        this.albums = albums;
        this.songs = songs;
    }
}