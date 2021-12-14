const express = require("express");
const NodesController = require("./nodes");

const router = express.Router();

router.post("/addNewNodeToFaceGeoJson",
    NodesController.addNewNodesToFaceGeoJson
);
router.post("/addNewNodeToFaceJson",
    NodesController.addNewNodesToFaceJson
);
// router.get("/getNodes/:nodesId", NodesController.) ;

module.exports = router;