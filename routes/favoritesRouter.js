const express = require('express');
const router = express.Router();
const favControllers = require("../controllers/favoritesControllers.js")

router.post("/add",favControllers.addFav);
router.delete("/remove/:listId/:userId",favControllers.removeFav);
router.get("/view/:id",favControllers.viewFav);



module.exports = router
