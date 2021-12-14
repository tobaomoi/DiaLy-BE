const Nodes = require("../../../models/node");
const FacesGeoJson = require("../../../models/geoJson/faceGeoJson");
const FacesJson = require("../../../models/json/faceJson");
module.exports.addNewNodesToFaceGeoJson = async (req, res, next) => {
    const { faceID, x, y, z } = req.body;
    try {
        const foundedFace = await FacesGeoJson.findById(faceID);
        const newNode = [x, y, z];
        // const foundedNodes = await foundedFace.rings.find(newNode);
        if (!foundedFace) {
            return res.status(400).json({ error: "Face khong ton tai !" });
        } else {
            foundedFace.geometry.coordinates.push(newNode);
            foundedFace.save();
            return res.status(200).json({ message: "Them node thanh cong !" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
}

module.exports.addNewNodesToFaceJson = async (req, res, next) => {
    const { faceID, x, y, z } = req.body;
    const newNode = [x, y, z];
    try {
        const foundedFace = await FacesJson.findById(faceID);
        // const arr = foundedFace.rings;
        // const foundedNode = (newNode,arr) =>{
        //     arr.forEach((x) => {
        //         if(JSON.stringify(newNode) === JSON.stringify(x)){
        //             return true;
        //         }
        //         return false;
        //     })
        // }
        if (!foundedFace) {
            return res.status(400).json({ error: "Face khong ton tai !" });
        }
        else {
            foundedFace.rings.push(newNode);
            foundedFace.save();
            return res.status(200).json({ message: "Them node thanh cong !" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
}

// module.exports.getNodes = async (req, res, next) => {
//     const { nodesId } = req.params;
//     try {
//         const foundedNodes = await Nodes.findOne({
//             nodesId,
//         });
//         if (!foundedNodes) {
//             return res.status(400).json({ error: "Tap hop node khong ton tai !" });
//         } else {
//             return res.status(200).json(foundedNodes);
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("Something went wrong!");
//     }
// }