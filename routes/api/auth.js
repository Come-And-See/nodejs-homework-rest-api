const express = require("express");
const ctrl = require("../../controllers/auth");

const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload");

const validateBody = require("../../helpers/validateBody");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginShema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
