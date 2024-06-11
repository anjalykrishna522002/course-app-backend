const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "coursetitle": { type: String, required: true },
        "coursedescription": { type: String, required: true },
        "date": { type: String, required: true },
        "duration": { type: String, required: true },
        "venue": { type: String, required: true },
        "trainername": { type: String, required: true },
    
    }
)

let coursemodel = mongoose.model("course", schema);
module.exports = { coursemodel }