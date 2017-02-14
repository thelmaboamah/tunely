var mongoose = require("mongoose"),
		Schema = mongoose.Schema;

var SongSchema = new Schema({
	name: String,
	track: Number
});

module.exports = Song;