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
             },
  printPlaylists: function () {
      for (var pCode in this.playlists) {
      var albumInfo = this. playlists[pCode];

      console.log (pCode + ": " + albumInfo.name + " - " + albumInfo.tracks.length + " tracks")
      }
  },

  printTracks: function () {
      for (var tCode in this.tracks) {
      var albumInfo = this.tracks[tCode];

      console.log(tCode + ": " + albumInfo.name + " by " + albumInfo.artist + "(" + albumInfo.album + ")")
      }
    },

  printPlaylist: function (playlistId) {
     var trackID = this.playlists[playlistId];

     console.log(playlistId + " " + trackID.name + " - " + trackID.tracks.length + " tracks")

     var tc = trackID["tracks"]

     for (var i = 0; i < tc.length; i++) {
        var bb = tc[i]

         console.log(bb + ": " + this.tracks[bb].name + " " + this.tracks[bb].artist + " " + "(" + this.tracks[bb].album + ")" )
        }
      },

  addTrackToPlaylist: function (trackId, playlistId) {

     this.playlists[playlistId]["tracks"].push(trackId);
   },

  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   },

  addTrack: function (name, artist, album) {
    var newTrackId = this.uid()
    var albumInfoObj = {
      "id": newTrackId,
      "name": name,
      "artist": artist,
      "album": album
  }
  this.tracks[newTrackId] = albumInfoObj
 },

 addPlaylist: function (name) {
  var newPlaylistId = this.uid()
  var albumInfoObj = {
  "id": newPlaylistId,
  "name": name,
  "tracks": ""
 }
this.playlists[newPlaylistId] = albumInfoObj
}

}
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01")
library.addTrackToPlaylist("t03","p01")
console.log(library.playlists)
library.addTrack("greatSong", "greatArtist","greatAlbum")
console.log(library.tracks)

/*


addPlaylist("awsomePlaylist")
console.log(playlists)
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {}
*/
