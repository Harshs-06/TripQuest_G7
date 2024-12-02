let mongoose = require("mongoose")
const { type } = require("os")

let GroupSchema = new mongoose.Schema({
    GroupName: { type: String, required: true },
    Destination: { type: String, required: true },
    Cost: { type: String, required: true },
    Members: { type: String, required: true },
    Transport: { type: String, required: true }
});


module.exports = mongoose.model("GroupDetails", GroupSchema)