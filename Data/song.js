const bcrypt = require('bcryptjs')

require('dotenv').config()

const songs = [
    {
        title: "Redempetion Song",
        artist: "Bob Marley",
        genre: "Reggae",
        album: "Uprising",
        albumImageUrl: "https://crotchetyman.files.wordpress.com/2017/04/quotation.jpg",
        youtubeId: "https://www.youtube.com/watch?v=yv5xonFSC4c",
        lyrics: "No, woman, no cry No, woman, no cry No, woman, no cry No, woman, no cry…",
        tab: "Redempetion, Bob Marley,  Uprising....."
    },
    {
        title: "No woman no cry",
        artist: "Bob Marley",
        genre: "Reggae",
        album: "Live!",
        albumImageUrl: "https://img.discogs.com/RPQHroANAiFxbSUZeJUisP6P6TI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-646433-1205281079.jpeg.jpg",
        youtubeId: "https://www.youtube.com/watch?v=IT8XvzIfi4U",
        lyrics: "Old pirates, yes, they rob I Sold I to the merchant ships Minutes after they took I....",
        tab: "Redempetion, Bob Marley, Uprising....."
    },
    {
        title: "Get up Stand up",
        artist: "Bob Marley",
        genre: "Reggae",
        album: "Burnin",
        albumImageUrl: "https://crotchetyman.files.wordpress.com/2017/04/quotation.jpg",
        youtubeId: "https://www.youtube.com/watch?v=X2W3aG8uizA",
        lyrics: "Get up, stand up, stand up for your rights Get up, stand up, stand up for your rights Get up, stand up, stand up for your rights Get up, stand up, don't give up the fight…",
        tab: "Redempetion, Bob Marley, Uprising....."
    },
]

module.exports = songs;