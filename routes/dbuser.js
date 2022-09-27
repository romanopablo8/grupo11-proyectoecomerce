const express = require("express");
const router = express.Router();

const dbusercontroller = require("../controllers/userdb");
const validations = require("../middlewares/validatedbUser");
const uploadFile = require("../middlewares/diskStorage");

// /* GET LOGIN page. */
router.get("/db/login", dbusercontroller.login);
router.post("/db/login", dbusercontroller.processlogin);

// Perfil de Usuario
router.get("/db/profile", dbusercontroller.profile);

// Logout
router.get("/db/logout", dbusercontroller.logout);

/* usuarios list */
router.get("/db/userlist", dbusercontroller.list);
/* usuarios details */
router.get("/db/detail/:id", dbusercontroller.detail);
/* usuarios edit */
router.get("/db/edit/:id", dbusercontroller.edit);
/* usuarios update */
router.put("/db/update/:id", dbusercontroller.update);
/* usuarios create */
router.get("/db/add", dbusercontroller.add);
router.post(
  "/db/add",
  uploadFile.single("foto_perfil"),
  validations,
  dbusercontroller.create
);

module.exports = router;
