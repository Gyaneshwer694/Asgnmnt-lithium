const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookcontroller")
const publisherController= require("../controllers/PublisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createnewAuthor", newAuthorController.createnewAuthor  )

router.get("/getnewAuthorsData", newAuthorController.getnewAuthorsData)

router.post("/createnewBook", newBookController.createnewBook  )

router.get("/getnewBook", newBookController.getnewBook)

router.post("/createPublisher", publisherController.createPublisher )

router.get ("/getpublishersdata",publisherController.getPublishersData)

router.get("/completeBookdetails", newBookController.completeBookdetails)

module.exports = router;