const FaceGeoJson = require("../../../models/geoJson/faceGeoJson");
const FaceJson = require("../../../models/json/faceJson");
const BodyJson = require("../../../models/json/bodyJson");
const BodyGeoJson = require ("../../../models/geoJson/bodyGeoJson");

const populateGeoJsonFields = [
    {
        path: "type",
        select: "",
    }
]

const populateJsonFields = [
    {
        path: "rings",
        select: "",
    }
]

module.exports.addNewFaceGeoJson = async (req, res, next) => {
    const { NumberFace, type, geometry } = req.body;
    try {
        const foundedFace = await FaceGeoJson.findOne({
            NumberFace
        })
        if (foundedFace) {
            return res.status(400).json({ error: "Face da ton tai !" });
        } else {
            const newFaceGeoJson = new FaceGeoJson({
                NumberFace,
                type,
                geometry
            })
            newFaceGeoJson.save();
            return res.status(200).json({ message: "Them Face thanh cong !" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
};

module.exports.addNewFaceJson = async (req, res, next) => {
    const { NumberFace, type, symbol } = req.body;
    try {
        const foundedFace = await FaceJson.findOne({
            NumberFace
        })
        if (foundedFace) {
            return res.status(400).json({ error: "Face da ton tai!" });
        } else {
            const newFaceJson = new FaceJson({
                NumberFace,
                type,
                symbol
            })
            newFaceJson.save();
            return res.status(200).json({ message: "Them face thanh cong!" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}

module.exports.addFaceToBodyJson = async (req, res, next ) => {
    const {nameBody, faceID} = req.body;
    try {
        const foundedBodyNameJson = await BodyJson.findOne({nameBody});
        const foundedFace = await FaceJson.findById(faceID);
        if(!foundedBodyNameJson){
            return res.status(400).json({error: "Body khong ton tai !"});
        } else{
            foundedBodyNameJson.data.push(foundedFace);
            foundedBodyNameJson.save();
            return res.status(200).json({message: "Them face vao body thanh cong !"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
}

module.exports.addFaceToBodyGeoJson = async (req, res, next ) => {
    const {nameBody, faceID} = req.body;
    try {
        const foundedBodyNameGeoJson = await BodyGeoJson.findOne({nameBody});
        const foundedFace = await FaceGeoJson.findById(faceID);
        if(!foundedBodyNameGeoJson){
            return res.status(400).json({error: "Body khong ton tai !"});
        } else{
            foundedBodyNameGeoJson.geoData.features.push(foundedFace);
            foundedBodyNameGeoJson.save();
            return res.status(200).json({message: "Them face vao body thanh cong !"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
}
module.exports.getFaceGeoJson = async (req, res, next) => {
    const { faceGeoJsonID } = req.params;
    try {
        const foundedFace = await FaceGeoJson.findById(faceGeoJsonID).populate(populateGeoJsonFields);
        if (!foundedFace) {
            return res.status(400).send({ error: "Face khong ton tai !" });
        } else {
            await foundedFace.save();
            return res.status(200).json(foundedFace);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}

module.exports.getFaceJson = async (req, res, next) => {
    const { faceJsonID } = req.params;
    try {
        const foundedFace = await FaceJson.findById(faceJsonID).populate(populateJsonFields);
        if (!foundedFace) {
            return res.status(400).send({ error: "Face khong ton tai !" });
        } else {
            await foundedFace.save();
            return res.status(200).json(foundedFace);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}

