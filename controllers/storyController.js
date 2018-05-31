const db = require("../models")

module.exports = {
    newStory: function(req, res){
        db.Story.create(
            {
                title: req.body.title,
                author: req.body.author,
                body: req.body.body
            }
        ).then(result => {
            res.json(result)
        }).catch(err => console.log(err))
    }
}