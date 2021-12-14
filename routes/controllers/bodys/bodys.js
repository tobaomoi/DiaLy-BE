const BodyGeoJson = require("../../../models/geoJson/bodyGeoJson");
const BodyJson = require("../../../models/json/bodyJson");
const FaceJson = require("../../../models/json/faceJson");

const populateBodyJsonFields = [
    {
        path: "data",
        select: " type rings symbol",
        populate:[
            {
                path: "rings",
                select:""
            }
        ]
    }
];

const populateBodyGeoJsonFields = [
    {
        path: "geoData",
        select: "bodyType features properties",
        populate: [
            {
                path: "features",
                select: "_id type geometry"
            }
        ]
    }
];

module.exports.addNewBodyJson = async (req, res, next) => {
    const { nameBody } = req.body;
    try {
        const foundedBody = await BodyJson.findOne({
            nameBody
        })
        if (foundedBody) {
            return res.status(400).json({ error: "Body da ton tai !" });
        } else {
            const newBodyJson = new BodyJson({
                nameBody
            })
            newBodyJson.save();
            return res.status(200).json({ message: "Them body thanh cong !" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}

module.exports.addNewBodyGeoJson = async (req, res, next) => {
    const { nameBody, geoData,properties,height,symbolLayers  } = req.body;
    try {
        const foundedBody = await BodyGeoJson.findOne({
            nameBody
        })
        if (foundedBody) {
            return res.status(400).json({ error: "Body da ton tai !" });
        } else {
            const newBodyGeoJson = new BodyGeoJson({
                nameBody,
                geoData,
                properties,
                height,
                symbolLayers
            })
            newBodyGeoJson.save();
            return res.status(200).json({ message: "Them body thanh cong !" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}

module.exports.getBodyGeoJson = async (req, res, next) => {
    try {
        const { nameBody} = req.params;
        const foundedBody = await BodyGeoJson.find({
            nameBody
        }
        ).populate(populateBodyGeoJsonFields);
        if (!foundedBody) {
            return res.status(400).send({ error: "Body khong ton tai !" });
        } else {
            return res.status(200).json(foundedBody);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}
module.exports.getBodyJson = async (req, res, next) => {
    try {
        const { nameBody } = req.params;
        const foundedBody = await BodyJson.find({
            nameBody
        }
        ).populate(populateBodyJsonFields);
        if (!foundedBody) {
            return res.status(400).send({ error: "Body khong ton tai !" });
        } else {
            return res.status(200).json(foundedBody);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");
    }
}