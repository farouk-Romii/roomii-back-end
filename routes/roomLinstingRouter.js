const express = require('express');
const router = express.Router();
const roomControllers = require("../controllers/roomListingControllers.js");


router.post("/add",roomControllers.createList);
router.delete("/remove/:id",roomControllers.deletList);
router.get("/view",roomControllers.getlist);
router.patch("/change",roomControllers.changeList);



module.exports = router;



