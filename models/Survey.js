const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  body: String,
  dateSent: Date,
  lastResponded: Date,
  no: { type: Number, default: 0 },
  recipients: [RecipientSchema],
  subject: String,
  title: String,
  yes: { type: Number, default: 0 },
});

mongoose.model("surveys", surveySchema);
