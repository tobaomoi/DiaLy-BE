const express = require("express");
const FacesController = require("./faces");

const router = express.Router();

router.post("/addNewFaceGeoJson",
    FacesController.addNewFaceGeoJson
);
router.post("/addNewFaceJson", FacesController.addNewFaceJson);
router.post ("/addFaceToBodyJson", FacesController.addFaceToBodyJson);
router.post ("/addFaceToBodyGeoJson",FacesController.addFaceToBodyGeoJson);
router.get("/getFaceJson/:faceJsonID", FacesController.getFaceJson);
router.get("/getFaceGeoJson/:faceGeoJsonID", FacesController.getFaceGeoJson);

module.exports = router;