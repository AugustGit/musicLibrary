class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
  }

   set addPlaylists(playlist){
    this.playlists.push(playlist)
   }

   get printPlaylists() {
    console.log(" H  this.playlists ", this.playlists)
    for(playlist of this.playlists){
       console.log(" I  playlist ", playlist)

      let eachplaylist = playlist
       console.log(" J  eachplaylist ", eachplaylist)
      return eachplaylist
    }
    console.log(" K  eachplaylist ", eachplaylist)
    return `${eachplaylist}`
   }
}

// class Playlist extends Library {
//   constructor(name) {
//      super()
//     this.name = name
//     this.tracks = []
//   }
//}

// class Tracks extends Playlist {
//   constructor(title, length, rating) {
//       super()
//     this.title = ""
//     this.length = 0
//     //this.rating = 0
//   },

  // var rating = {
  //   element: 0,
  //     get rating() {
  //       return this.element
  //     },
  //     set rating(value) {
  //       if (value > 0 && value < 6){
  //         return this.element = value
  //       } else {
  //         console.log("Rating must be between 1- 5 and you wrote ", value);
  //       }
  //      }
 // }

  // get overallRating(){
  // return "pending"
  // },

  // get totalDuration(){
  //  return "pending"
  // }
//}

const library = new Library ('spinClass', 'Kim')
//('spinClass', 'Kim') has been added succesfully

library.addPlaylists = "warmUp"
console.log("warmUp ",library.spinClass)