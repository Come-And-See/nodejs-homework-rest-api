const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactsSchema);

const addSchemacontacts = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
});

const addSchemaFavorite = Joi.object({
    favorite: Joi.boolean().required(),
});


const schemas = {
  addSchemacontacts,
  addSchemaFavorite,
};

module.exports = { Contact, schemas };
