const mongoose = require("mongoose");

const nodeSchema = mongoose.Schema(
    {
            x: { type: String, required: true },
            y: { type: String, required: true },
            z: { type: String, required: true }
        
    }
)

const node = mongoose.model("node", nodeSchema);

module.exports = node;