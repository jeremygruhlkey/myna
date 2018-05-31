const router = require("express").Router();
const axios = require("axios")
const path = require("path")
const storyController = require("../controllers/storyController")

router.post("/api/v1/newStory", (req, res) => {
    storyController.newStory(req, res)
})

module.exports = router;