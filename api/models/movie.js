const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = Schema({
  body: String
})

const person = {
  type: ObjectId, ref: 'Person'
}

const movieSchema = Schema({
  title: String,
  yearReleased: Number,
  star: String,
  comments: [CommentSchema],
  director: { type: ObjectId, ref: 'Person' },
  cast: [{ actor: person, character: person }],
  crew: [{ person: person, role: String }]
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

module.exports = Movie
