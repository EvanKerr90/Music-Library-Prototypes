    let Library = function(name, creator) {
            this.name = name;
            this.creator = creator;
            this.playlists = [];
    } 


    let PlayList = function(name){
        this.name = name;
        this.tracks = [];
        }

    let Track = function(title, rating, length) {
     this.title = title;
     this.rating = rating;
     this.length = length;
     }



    PlayList.prototype.overallRating = function() {
        let ratings = [];
        this.tracks.forEach(function(track) {
            ratings.push(track.rating)
        })
        return ratings.reduce((accumulator, currentValue) => accumulator + currentValue)/this.tracks.length
        }

    PlayList.prototype.totalDuration = function() {
        let duration = []
        this.tracks.forEach(function(track) {
            duration.push(track.length)
        })
        return duration.reduce((accumulator, currentValue) => accumulator + currentValue)
    }


    Library.prototype.AddPlaylist = function(playlist) {
        this.playlists.push(playlist)
    }


    PlayList.prototype.addTrack = function(track) {
    this.tracks.push(track)
    }


let awesome = new Library('Awesome Stuff 2018', 'Evan')
let awesome1 = new PlayList('Awesome Mix 1')
let loud = new Track('Kick Ass', 5, 1)
let loud2 = new Track('Stuff', 3, 2)
let loud3 = new Track('More Stuff', 4, 4)
let awesome2 = new PlayList('Awesome Mix 2')
let quiet = new Track('Kick Ass1', 5, 1)
let quiet2 = new Track('Stuff1', 2, 3)
let quiet3 = new Track('More Suff1', 2, 4)

awesome1.addTrack(loud)
awesome1.addTrack(loud2)
awesome1.addTrack(loud3)
console.log(awesome1)

awesome2.addTrack(quiet)
awesome2.addTrack(quiet2)
awesome2.addTrack(quiet3)
console.log(awesome2)

console.log(awesome1.overallRating())
console.log(awesome1.totalDuration())

awesome.AddPlaylist(awesome1)
awesome.AddPlaylist(awesome2)
console.log(awesome.playlists)

