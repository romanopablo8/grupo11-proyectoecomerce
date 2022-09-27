const express = require("express");
const router = express.Router();
const uploadFile = require("../middlewares/diskStorageprod");
const validations = require("../middlewares/validatedbProd");

const dbproductcontroller = require("../controllers/productdb");

/*** CREATE ONE PRODUCT ***/
router.get("/prodb/add", dbproductcontroller.add);
router.post(
  "/prodb/add",
  uploadFile.single("image"),
  validations,
  dbproductcontroller.store
);

/* PRODUCT list */
router.get("/prodb/productlist", dbproductcontroller.list);
router.post("/prodb/productlist", dbproductcontroller.buscar);
router.post("/prodb/buscar", dbproductcontroller.buscar2);
/* PRODUCT details */
router.get("/prodb/detail/:id", dbproductcontroller.detail);

/* PRODUCT details */
router.get("/prodb/detail2/:id", dbproductcontroller.detail2);

/* PRODUCT EDIT */
router.get("/prodb/edit/:id", dbproductcontroller.edit);
/* PRODUCT UPDATE */
router.put("/prodb/update/:id", dbproductcontroller.update);
/* PRODUCT ERASE */
router.delete("/prodb/detail/:id", dbproductcontroller.erase);

module.exports = router;
