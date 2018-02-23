var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var playlists =  library.playlists;
var tracks = library.tracks;

var printPlaylists = function () {
 for (var pCode in playlists) {
    var albumInfo = playlists[pCode];

  console.log(pCode + ": " + albumInfo.name + " - " + albumInfo.tracks.length + " tracks")
 }
}
printPlaylists();

console.log( " next ")

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



var printTracks = function () {

  for (var tCode in tracks) {
    var albumInfo = tracks[tCode];

    console.log(tCode + ": " + albumInfo.name + " by " + albumInfo.artist + "(" + albumInfo.album + ")")
  }
}
printTracks()

console.log( " next ")
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)




var printPlaylist = function (playlistId) {


  var trackID = playlists[playlistId];

  console.log(playlistId + " " + trackID.name + " - " + trackID.tracks.length + " tracks")

  var tc = trackID["tracks"] // [ 't01', 't02' ]

  //for (var tc in tracks) {
   // var albumInfo = tracks[tc];

  for (var i = 0; i < tc.length; i++) {
   var bb = tc[i]

 console.log(bb + ": " + tracks[bb].name + " " + tracks[bb].artist + " " + "(" + tracks[bb].album + ")" )
  }
}

printPlaylist("p01")

console.log( " next ")

// adds an existing track to an existing playlist

/*playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                      */

var addTrackToPlaylist = function (trackId, playlistId) {
//obj playlists key playlistID value = tracks
 playlists[playlistId]["tracks"].push(trackId);
 // in Obj playlists to key p01 add value t03
}

addTrackToPlaylist("t03","p01")

console.log(playlists)

console.log( " next ")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library


var addTrack = function (name, artist, album) {
 var newTrackId = uid()
  var albumInfoObj = {
  "id": newTrackId,
  "name": name,
  "artist": artist,
  "album": album
 }
  tracks[newTrackId] = albumInfoObj

}
addTrack("greatSong", "greatArtist","greatAlbum")

console.log(tracks)
// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistId = uid()
  var albumInfoObj = {
  "id": newPlaylistId,
  "name": name,
  "tracks": ""
 }
playlists[newPlaylistId] = albumInfoObj
}
addPlaylist("awsomePlaylist")
console.log(playlists)
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}