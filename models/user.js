const { Schema, model } = require("mongoose");
const Joi = require("joi");

const EMAIL_REGEX = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,8})+$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: EMAIL_REGEX,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
 
  },
  { versionKey: false }
);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required(),
  password: Joi.string().min(6).required(),
});

const loginShema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginShema,
};

module.exports = { User, schemas };
