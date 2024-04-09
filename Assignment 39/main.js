"use strict";
// creating a function of make_album 
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// toring a function in avariable and then call it
// making first album with no tracks
let album1 = make_album("Atif Aslam", "Jal Pari");
console.log("No Tracks Album:", album1);
// making second album with also no tracks 
let album2 = make_album("Talha Younus", "Rebirth");
console.log("No Tracks Album:", album2);
// making third album with tracks 
let album3 = make_album("Ali Zafar", "Teefa In Trouble", 6);
console.log("Album With Tracks:", album3);
