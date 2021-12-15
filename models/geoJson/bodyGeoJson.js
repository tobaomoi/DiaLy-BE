const mongoose = require("mongoose");

const BodyGeoJsonSchema = mongoose.Schema({
    nameBody: {type:String, required: true},
    geoData: {
        type: { type: String, default: "FeatureCollection" },
        features: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "faceGeoJson"
            }],
            default: []
        },
        properties: {
            height: { type: Number, required: true },
            color: {type: String, required: true}
        }
    }

})

const BodyGeoJson = mongoose.model("bodyGeojson", BodyGeoJsonSchema);
module.exports = BodyGeoJson;

