const express = require("express");
const NodesRouter = require("./controllers/nodes/index");
const FacesRouter = require("./controllers/faces/index");
const BodysRouter = require("./controllers/bodys/index");

const router = express.Router();

router.use("/api/faces",FacesRouter);
router.use("/api/nodes",NodesRouter);
router.use("/api/bodys", BodysRouter);
module.exports = router;