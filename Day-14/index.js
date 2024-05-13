"use strict";
// Question 40:
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum('artist 1', 'album title 1');
console.log(album1);
let album2 = makeAlbum('artist 2', 'album title 2');
console.log(album2);
let album3 = makeAlbum('artist ', 'album title 3', 15);
console.log(album3);
//Question 41:
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];
function showMagicians() {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
showMagicians();
// Question 42:
function greatMagicians(text) {
    magicians.forEach((magician) => {
        console.log(`${text} ${magician}`);
    });
}
greatMagicians("Great");
//another way to add great phrase
function greatMagicians2() {
    magicians.forEach((magician) => {
        console.log(`Great ${magician}`);
    });
}
greatMagicians2();
