const { Contact, addSchema, addSchemaFavorite } = require("../models/contacts");
const { HttpErrors } = require("../helpers/HttpErrors");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner });
  res.json(result);
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findOne(contactId);
  if (!result) {
    throw HttpErrors(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res, next) => {
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpErrors(404, "Not Found");
  }
  res.json({
    message: "Delete success",
  });
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpErrors(400, "Not Found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpErrors(400, "Not Found");
  }
  res.json(result);
};

const ctrl = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};

module.exports = ctrl;
