var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new DealSchema object
var DealSchema = new Schema({
    busName: { type: String },
    businessID: {
        type: Schema.Types.ObjectId,
        ref: "Business"
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    googleID: { type: String },
    day: { type: Number, required: true },
    beginTime: { type: String, required: true },
    endTime: { type: String, required: true },
    info: { type: String, required: true },
    updated_date: { type: Date, default: Date.now },
    isShown: { type: Boolean, default: true}
});

// Creates our model from the above schema, using mongoose's model method
var Deal = mongoose.model("Deal", DealSchema);

// Export the Deal model
module.exports = Deal;