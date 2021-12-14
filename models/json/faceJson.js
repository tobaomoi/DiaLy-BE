const mongoose = require("mongoose");

const FaceJsonSchema = mongoose.Schema({
    NumberFace: { type: String, required: true },
    type: {type: String, default: "polygon" },
    rings: {
        type: [{
            type: Array,
        }
        ],
        default: []
    },
    symbol: {
        type: {type: String, default: "simple-fill" },
        color: [],
        outline: {
            color: [],
            width: { type: Number }
        }
    }
})

const FaceJson = mongoose.model("faceJson", FaceJsonSchema);
module.exports = FaceJson;