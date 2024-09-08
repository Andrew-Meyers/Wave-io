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

ArtistMap.set("Aaron May", new Artist("Aaron May", "Hip Hop/Rap", [
    "CHASE", "Summer 19'", "No Recognition"], [
    "Ride", "Make It", "Dreams", "In Love", "Let Go", "Cream", "Focus (Interlude)", "Understood", "I'm Good Luv, Enjoy.", "One For Me", "Closed Hands", "Chase", "Chains", "Time", "No Recognition", "I Ain't Worried"
]));
ArtistMap.set("A$AP Rocky", new Artist("A$AP Rocky", "East Coast Hip Hop", [
    "Testing", "Sundress" ], [
    "Praise The Lord", "Sundress",
]));
ArtistMap.set("Childish Gambino", new Artist("Childish Gambino", "Hip Hop/R&B", [
    "Because the Internet"], [
    "3005"
]));
ArtistMap.set("Dave", new Artist("Dave", "UK Drill", [
    "Sixth Paths", "Game Over", "PSYCHODRAMA", "We're All Alone In This Together", "Split Decision", "Meridian & Special"], [
    "Thiago Silva", "Picture Me", "Wanna Know", "Wanna Know Remix", "Game Over", "Question Time", "How I Met My Ex", "No Words", "My 19th Birthday", "Hangman", "Psycho", "Streatham", "Black", "Location", "Disaster", "Screwface Capital", "Lesley", 
    "Children Of The Internet", "We're All Alone", "Verdansk", "Clash", "In The Fire", "System", "Lazarus", "Law Of Attraction", "Both Sides Of A Smile", "Twenty To One", "Heart Attack", "Survivor's Guilt", "Starlight", "My 24th Birthday", "Trojan Horse", "Sprinter", 
    "Our 25th Birthday", "UK Rap", "Meridian", "Special", "Stop Giving Me Advice"
]));
ArtistMap.set("Denzel Curry", new Artist("Denzel Curry", "Hip Hop/Cloud Rap"));
ArtistMap.set("Dreamville", new Artist("Dreamville", "Hip Hop Group"));
ArtistMap.set("Jack Harlow", new Artist("Jack Harlow", "Hip Hop/Rap", [
    "Sweet Action", "Thats What They All Say"], [
    "What's Poppin", "Tyler Herro", "Lovin On Me"
]));
ArtistMap.set("JID", new Artist("JID", "Hip Hop", [
    "The Never Story", "DiCaprio 2", "The Forever Story" ], [
    "Never", "Off Deez", "151 Rum", "Workin Out", "Galaxy", "Raydar", "Dance Now", "Crack Sandwich", "Can't Punk Me", "Surround Sound", "Kody Blu 31", "Bruddanem", "Sistanem", "Can't Make U Change", "Stars", "Money", "Better Days", "Lauder Too", "2007"
]));
ArtistMap.set("J. Cole", new Artist("J. Cole", "Hip Hop/Rap"));
ArtistMap.set("Kanye West", new Artist("Kanye West", "Hip Hop/Rap" [
    "The College Dropout", "Late Registration", "Graduation", "808s & Heartbreak", "My Beautiful Dark Twisted Fantasy", "Watch the Throne", "Yeezus", "The Life of Pablo", "ye", "JESUS IS KING"], [
    "Good Morning", "Champion", "Stronger", "I Wonder", "Good Life", "Can't Tell Me Nothing", "Barry Bonds", "Drunk and Hot Girls", "Flashing Lights", "Everything I Am", "The Glory", "Homecoming", "Big Brother", "Goodnight", "Heartless", ""
]));
ArtistMap.set("Kendrick Lamar", new Artist("Kendrick Lamar", "West Coast Hip Hop"));
ArtistMap.set("Kota the Friend", new Artist("Kota the Friend", "Hip Hop", [
    "EVERYTHING", "Lyrics to Go, Vol. 2", "" ], [
    "Parked Cars", "'96 Bulls", "Grateful", "Always", "B.Q.E.", "Clinton Hill", "200 Dollars", "Emotionally Dumb", "Pomegranate", ""
]));
ArtistMap.set("Lil Uzi Vert", new Artist("Lil Uzi Vert", "Trap/Pop Rap"));
ArtistMap.set("Mac Miller", new Artist("Mac Miller", "Alt-Rap", [
    "K.I.D.S.", "Best Day Ever", "Best Day Ever (Live)", "On and On and Beyond", "I Love Life, Thank You", "Blue Slide Park", "Macadelic", "Watching Movies with the Sound Off", "Faces", "Swimming", "Circles"], [
    "Best Day Ever", "Get Up", "Donald Trump", "BDE Bonus", "Best Day Ever (Live)", "Love Lost", "Avian", "Matches", "Objects in the Mirror", "Claymation", "The Quest", "Wings", "Ladders", "Small Worlds","Conversation, Pt. 1", "Dunno", "Jet Fuel", "2009", 
    "So It Goes"
]));
ArtistMap.set("Meek Mill", new Artist("Meek Mill", "Hip Hop/Rap", [
    "Dreams and Nightmares", "DC4", "Championships"], [
    "Dreams and Nightmares", "Blue Notes", "Championships", "Going Bad"
]));
ArtistMap.set("Pop Smoke", new Artist("Pop Smoke", "Brooklyn Rap", [
    "Meet the Woo", "Meet the Woo 2", "Shoot for the Stars, Aim for the Moon", "Faith"], [
    "Welcome to the Party", "Hawk Em", "Dior", "PTSD", "Invincible", "Shake the Room", "Get Back", "Element", "Armed N Dangerous", "Mannequin", "Aim for the Moon", "For The Night", "Gangstas", "Yea Yea", "Make It Rain", "The Woo", "West Coast Shit", 
    "Enjoy Yourself", "Mood Swings", "Something Special", "What You Know Bout Love", "Got It On Me", "Tunnel Vision (Outro)", "Hotel Lobby", "Iced Out Audemars", "Woo Year", "Imperfections (Interlude)", "Hello", "Good News", "More Time", "Tell The Vision", 
    "Manslaughter", "Bout A Million", "Brush Em", "Top Shotta", "30", "Beat the Speaker", "Coupe", "What's Crackin", "Genius", "Mr. Jones", "Woo Baby", "Demeanor", "Spoiled", "8-Ball", "Back Door", "Merci Beaucoup", "Run Down", "Money Man", "Don't Know Em",
    "Double It"
]));
ArtistMap.set("Polo G", new Artist("Polo G", "Hip Hop/Drill Rap", [
    "Die A Legend", "Hall of Fame", ], [
    "Pop Out", "Rapstar",
]));
ArtistMap.set("Rod Wave", new Artist("Rod Wave", "Hip Hop", [
    "Ghetto Gospel", ], [
    "Chip on My Shoulder", "" 
]));

// For Singles, Just Use the Song Title as the Album Title

const songList = [
    new Song(ArtistMap.get("Aaron May").songs[0], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").songs[0]),
    new Song(ArtistMap.get("Aaron May").songs[1], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[2], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[3], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[4], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[5], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[6], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[7], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[8], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[9], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[10], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[11], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[0]),
    new Song(ArtistMap.get("Aaron May").songs[12], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[1]),
    new Song(ArtistMap.get("Aaron May").songs[13], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[2]),
    new Song(ArtistMap.get("Aaron May").songs[14], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[2]),
    new Song(ArtistMap.get("Aaron May").songs[15], ArtistMap.get("Aaron May").name, ArtistMap.get("Aaron May").albums[2]),

    new Song(ArtistMap.get("A$AP Rocky").songs[0], ArtistMap.get("A$AP Rocky").name, ArtistMap.get("A$AP Rocky").albums[0]),

    new Song(ArtistMap.get("Childish Gambino").songs[0], ArtistMap.get("Childish Gambino").name, ArtistMap.get("Childish Gambino").albums[0]),

    new Song(ArtistMap.get("Dave").songs[0], ArtistMap.get("Dave").name, ArtistMap.get("Dave").albums[0]),

    new Song(ArtistMap.get("Denzel Curry").songs[0], ArtistMap.get("Denzel Curry").name, ArtistMap.get("Denzel Curry").albums[0]),

    new Song(ArtistMap.get("Dreamville").songs[0], ArtistMap.get("Dreamville").name, ArtistMap.get("Dreamville").albums[0]),

    new Song(ArtistMap.get("Jack Harlow").songs[0], ArtistMap.get("Jack Harlow").name, ArtistMap.get("Jack Harlow").albums[0]),
    
    new Song(ArtistMap.get("JID").songs[0], ArtistMap.get("JID").name, ArtistMap.get("JID").albums[0]),

    new Song(ArtistMap.get("J. Cole").songs[0], ArtistMap.get("J. Cole").name, ArtistMap.get("J. Cole").albums[0]),

    new Song(ArtistMap.get("Kanye West").songs[0], ArtistMap.get("Kanye West").name, ArtistMap.get("Kanye West").albums[0]),

    new Song(ArtistMap.get("Kendrick Lamar").songs[0], ArtistMap.get("Kendrick Lamar").name, ArtistMap.get("Kendrick Lamar").albums[0]),

    new Song(ArtistMap.get("Kota the Friend").songs[0], ArtistMap.get("Kota the Friend").name, ArtistMap.get("Kota the Friend").albums[0]),

    new Song(ArtistMap.get("Lil Uzi Vert").songs[0], ArtistMap.get("Lil Uzi Vert").name, ArtistMap.get("Lil Uzi Vert").albums[0]),

    new Song(ArtistMap.get("Mac Miller").songs[0], ArtistMap.get("Mac Miller").name, ArtistMap.get("Mac Miller").albums[0]),

    new Song(ArtistMap.get("Meek Mill").songs[0], ArtistMap.get("Meek Mill").name, ArtistMap.get("Meek Mill").albums[0]),

    new Song(ArtistMap.get("Pop Smoke").songs[0], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[0]),
    new Song(ArtistMap.get("Pop Smoke").songs[1], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[0]),
    new Song(ArtistMap.get("Pop Smoke").songs[2], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[0]),
    new Song(ArtistMap.get("Pop Smoke").songs[3], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[0]),
    new Song(ArtistMap.get("Pop Smoke").songs[4], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[5], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[6], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[7], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[8], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[9], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[1]),
    new Song(ArtistMap.get("Pop Smoke").songs[10], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[11], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[12], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[13], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[14], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[15], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[16], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[17], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[18], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[19], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[20], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[21], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[22], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[23], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[24], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[25], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[26], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[27], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[2]),
    new Song(ArtistMap.get("Pop Smoke").songs[28], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[29], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[30], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[31], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[32], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[33], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[34], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[35], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[36], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[37], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[38], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[39], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[40], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[41], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[42], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[43], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[44], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[45], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[46], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[47], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[48], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[49], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),
    new Song(ArtistMap.get("Pop Smoke").songs[50], ArtistMap.get("Pop Smoke").name, ArtistMap.get("Pop Smoke").albums[3]),

    new Song(ArtistMap.get("Polo G").songs[0], ArtistMap.get("Polo G").name, ArtistMap.get("Polo G").albums[0]),

    new Song(ArtistMap.get("Rod Wave").songs[0], ArtistMap.get("Rod Wave").name, ArtistMap.get("Rod Wave").albums[0]), 
]
