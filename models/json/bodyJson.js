const mongoose = require("mongoose");

const BodyJsonSchema = mongoose.Schema({
    nameBody: {type: String, required: true},
    data: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "faceJson",
            }
        ], default: []
    }
})

const BodyJson = mongoose.model("bodyJson",BodyJsonSchema);
module.exports = BodyJson;