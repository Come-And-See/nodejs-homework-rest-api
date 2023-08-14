const express = require("express");
const ctrl = require("../../controllers/contacts")
const contactsRouter = express.Router();


contactsRouter.get("/", ctrl.listContacts);

contactsRouter.get("/:contactId", ctrl.getContactById);

contactsRouter.post("/", ctrl.addContact);

contactsRouter.delete("/:contactId", ctrl.removeContact );

contactsRouter.put("/:contactId", ctrl.updateContact);

contactsRouter.put("/:contactId/favorite", ctrl.updateStatusContact);


module.exports = contactsRouter;
