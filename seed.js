const mongoose = require('mongoose')
const db = require('./models')
mongoose.Promise = global.Promise

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/myna'
)
const storySeed = [
    {
        title: "This is a Test",
        author: "Jeremy T.",
        body: "Four score and seven years ago, our forefathers brought forth on this continent a new nation"
    },
    {
        title: "The Gunslinger",
        author: "Stephen King",
        body: "The man in black fled across the desert, and the gunslinger followed"
    },
]

db.Story
	.remove({})
	.then(() => db.Story.create(storySeed))
	.then(data => {
		process.exit(0)
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})