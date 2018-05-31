const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    body: {
        type: String,
    }
}, {timestamp: Date });

const Story = mongoose.model("Story", StorySchema)
module.exports = Story;