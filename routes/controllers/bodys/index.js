const express = require("express");
const BodysController = require("./bodys");

const router = express.Router();

router.post("/addNewBodyJson",BodysController.addNewBodyJson);
router.post("/addNewBodyGeoJson",BodysController.addNewBodyGeoJson);
router.get("/getBodyGeoJsonByName/:nameBody",BodysController.getBodyGeoJson);
router.get("/getBodyJsonByName/:nameBody",BodysController.getBodyJson);

module.exports = router;