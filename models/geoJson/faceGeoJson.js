const mongoose = require("mongoose");

const FaceGeoJsonSchema = mongoose.Schema({
    NumberFace: { type: String, required: true },
    type: { type: String, required: true },
    geometry: {
        type: {type: String,default: "Point" },
        coordinates: {
            type: [
                {
                    type: Array,
                    
                }
            ],
            default: []
        }
    }

}
)


const FaceGeoJson = mongoose.model("faceGeoJson", FaceGeoJsonSchema);

module.exports = FaceGeoJson;