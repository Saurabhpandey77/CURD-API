const express = require('express')
const router = express.Router();
const {getAllProuducts,createProduct,getOneProuducts,updateProuducts,deleteProuducts} = require("../controllers/product")

router.route("/").get(getAllProuducts);
router.route("/").post(createProduct);
router.route("/:id").get(getOneProuducts);
router.route("/:id").put(updateProuducts);
router.route("/:id").delete(deleteProuducts);

module.exports = router;
