var AllSongs = new Map();
const TwentyTensMix = new Map();
const Bangers = new Map();
const Chill = new Map();
const Country = new Map();
const Drill = new Map();
const GoodVibes = new Map();
const HipHop = new Map();

class Song {
    constructor(title = "", artist = [""], album = null) {
        this.title = title;
        this.artist = artist;
        this.album = album;
    }

}

class Artist {
    constructor(name = "", genre = null, albums = [], songs = []) {
        this.name = name;
        this.genre = genre;
        this.albums = albums;
        this.songs = songs;
    }
}

const ArtistMap = new Map();

ArtistMap.set("Mac Miller", new Artist("Mac Miller", "Alt-Rap", [
    "K.I.D.S.", "Best Day Ever", "On and On and Beyond", "I Love Life, Thank You", "Blue Slide Park", "Macadelic", "Watching Movies with the Sound Off", "Faces", "Swimming", "Circles"], [
    "Best Day Ever", "Get Up", "Donald Trump", "BDE Bonus", "Best Day Ever(Live)", "Love Lost", "Avian", "Matches", "Objects in the Mirror", "Claymation", "The Quest", "Wings", "Ladders", "Small Worlds","Conversation, Pt. 1", "Dunno", "Jet Fuel", "2009", "So It Goes"
]));
ArtistMap.set("Pop Smoke", new Artist("Pop Smoke", "Brooklyn Rap", [
    "Meet the Woo", "Meet the Woo 2", "Shoot for the Stars, Aim for the Moon", "Faith"], [
    "Welcome to the Party", "Hawk Em", "Dior", "PTSD", "Invincible", "Shake the Room", "Get Back", "Element", "Armed N Dangerous", "Mannequin", "Aim for the Moon", "For The Night", "Gangstas", "Yea Yea", "Make It Rain", "The Woo", "West Coast Shit", 
    "Enjoy Yourself", "Mood Swings", "Something Special", "What You Know Bout Love", "Got It On Me", "Tunnel Vision (Outro)", "Hotel Lobby", "Iced Out Audemars", "Woo Year", "Imperfections (Interlude)", "Hello", "Good News", "More Time", "Tell The Vision", 
    "Manslaughter", "Bout A Million", "Brush Em", "Top Shotta", "30", "Beat the Speaker", "Coupe", "What's Crackin", "Genius", "Mr. Jones", "Woo Baby", "Demeanor", "Spoiled", "8-Ball", "Back Door", "Merci Beaucoup", "Run Down", "Money Man", "Don't Know Em",
    "Double It"
]));
ArtistMap.set("JID", new Artist("JID", "Hip Hop", [
    "The Never Story", "DiCaprio 2", "The Forever Story" ], [
    "Never", "Off Deez", "151 Rum", "Workin Out", "Galaxy", "Raydar", "Dance Now", "Crack Sandwich", "Can't Punk Me", "Surround Sound", "Kody Blu 31", "Bruddanem", "Sistanem", "Can't Make U Change", "Stars", "Money", "Better Days", "Lauder Too", "2007"
]));
ArtistMap.set("J. Cole", new Artist("J. Cole", ""));
ArtistMap.set("Aaron May", new Artist("Aaron May"));
ArtistMap.set("Kota the Friend", new Artist("Kota the Friend", "Hip Hop", [
    "Parked Cars", "'96 Bulls", "Grateful",  
    "EVERYTHING", "Lyrics to Go, Vol. 2", "" ], [
    "'96 Bulls", "Grateful",
    "Always", "B.Q.E.", "Clinton Hill", "200 Dollars", "Emotionally Dumb", "Pomegranate", ""
]));

ArtistMap.set("Kanye West", new Artist("Kanye West", "Hip Hop/Rap" [
    "The College Dropout", "Late Registration", "Graduation", "808s & Heartbreak", "My Beautiful Dark Twisted Fantasy", "Watch the Throne", "Yeezus", "The Life of Pablo", "ye", "JESUS IS KING"], [
    "Good Morning", "Champion", "Stronger", "I Wonder", "Good Life", "Can't Tell Me Nothing", "Barry Bonds", "Drunk and Hot Girls", "Flashing Lights", "Everything I Am", "The Glory", "Homecoming", "Big Brother", "Goodnight", "Heartless", ""
]));
ArtistMap.set("Dave", new Artist("Dave", "UK Drill", [
    "Thiago Silva", "Picture Me", "Sixth Paths", "Wanna Know Remix", "Hangman", "Children Of The Internet", "Starlight", "My 24th Birthday", "Split Decision", "Meridian & Special", "Stop Giving Me Advice", 
    "Game Over", "PSYCHODRAMA", "We're All Alone In This Together",], [
    "Thiago Silva", "Picture Me", "Wanna Know", "Wanna Know Remix","Game Over", "Question Time", "How I Met My Ex", "No Words", "My 19th Birthday", "Hangman", "Psycho", "Streatham", "Black", "Location", "Disaster", "Screwface Capital", "Lesley", "Children Of The Internet", 
    "We're All Alone", "Verdansk", "Clash", "In The Fire", "System", "Lazarus", "Law Of Attraction", "Both Sides Of A Smile", "Twenty To One", "Heart Attack", "Survivor's Guilt", "Starlight", "My 24th Birthday", "Trojan Horse", "Sprinter", "Our 25th Birthday", 
    "UK Rap", "Meridian", "Special", "Stop Giving Me Advice"
]));
ArtistMap.set("Dreamville", new Artist("Dreamville"));
ArtistMap.set("Lil Uzi Vert", new Artist("Lil Uzi Vert"));
ArtistMap.set("Denzel Curry", new Artist("Denzel Curry"));
ArtistMap.set("Kendrick Lamar", new Artist("Kendrick Lamar"));
ArtistMap.set("Childish Gambino", new Artist("Childish Gambino"));
ArtistMap.set("Rod Wave", new Artist("Rod Wave", "Hip Hop", [
    "Ghetto Gospel", ], [
    "Chip on My Shoulder", "" 
]));
ArtistMap.set("Meek Mill", new Artist("Meek Mill", "Hip Hop/Rap", [
    "Dreams and Nightmares", ""], [
    "Dreams and Nightmares",
]));
ArtistMap.set("A$AP Rocky", new Artist("A$AP Rocky", "", [
    "Testing", "Sundress" ], [
    "Praise The Lord", "Sundress",
]));
ArtistMap.set("Polo G", new Artist("Polo G", "", [
    "Die A Legend", "Hall of Fame", ], [
    "Pop Out", "Rapstar",
]));

const songList = [
    new Song(Artist.get("Pop Smoke").songs[0], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[0]),
    new Song(Artist.get("Pop Smoke").songs[1], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[0]),
    new Song(Artist.get("Pop Smoke").songs[2], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[0]),
    new Song(Artist.get("Pop Smoke").songs[3], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[0]),
    new Song(Artist.get("Pop Smoke").songs[4], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[5], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[6], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[7], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[8], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[9], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[1]),
    new Song(Artist.get("Pop Smoke").songs[10], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").album[2]),
    new Song(Artist.get("Pop Smoke").songs[11], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[12], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[13], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[14], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[15], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[16], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[17], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[18], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[19], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[20], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[21], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[22], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[23], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[24], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[25], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[26], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[27], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[28], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[29], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[30], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[31], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[32], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[33], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[34], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[35], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[36], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[37], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[38], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[39], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[40], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[41], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[2]),
    new Song(Artist.get("Pop Smoke").songs[42], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[43], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[44], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[45], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[46], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[47], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[48], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[49], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),
    new Song(Artist.get("Pop Smoke").songs[50], Artist.get("Pop Smoke").name, Artist.get("Pop Smoke").albums[3]),



]
