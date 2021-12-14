const mongoose = require("mongoose");

const BodyGeoJsonSchema = mongoose.Schema({
    nameBody: {type:String, required: true},
    geoData: {
        bodyType: { type: String, default: "FeatureCollection" },
        features: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "faceGeoJson"
            }],
            default: []
        },
        properties: {
            height: { type: Number, required: true },
            symbolLayers: [
                {
                    type: { type: String, required: true },
                    size: { type: Number, required: true },
                    material: {
                        color: { type: [], required: true }
                    }
                }
            ]
        }
    }

})

const BodyGeoJson = mongoose.model("bodyGeojson", BodyGeoJsonSchema);
module.exports = BodyGeoJson;

