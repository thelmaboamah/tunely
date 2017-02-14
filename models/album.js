var mongoose = require("mongoose"),
		Schema = mongoose.Schema,
		Song = require("./song")


var AlbumSchema = new Schema({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [String]
	songs: [SongSchema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

