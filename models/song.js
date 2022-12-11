const mongoose = require("mongoose");
const Joi = require("joi");

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: mongoose.Schema.Types.ObjectId, required: true },
  img: { type: String, required: true },
  duration: { type: String, required: true },
  audio: { type: String, required: true },
});

const validate = (song) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string().required(),
    duration: Joi.number().required(),
  });
  return schema.validate(song);
};

const Song = mongoose.model("song", songSchema);

module.exports = { Song, validate };
