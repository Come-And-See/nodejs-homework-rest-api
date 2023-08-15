const express = require("express");
const ctrl = require("../../controllers/contacts");

const validateBody = require("../../helpers/validateBody");
const { schemas } = require("../../models/contacts");

const authenticate = require("../../middlewares/authenticate");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrl.listContacts);

contactsRouter.get("/:contactId", authenticate, ctrl.getContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchemacontacts),
  ctrl.addContact
);

contactsRouter.delete("/:contactId", authenticate, ctrl.removeContact);

contactsRouter.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchemacontacts),
  ctrl.updateContact
);

contactsRouter.put(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.addSchemaFavorite),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
