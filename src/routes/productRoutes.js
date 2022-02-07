const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createProduct);

router.route("/").get(getProducts).post(createProduct);

// router.get("/:id", getProduct);
// router.delete("/:id", deleteProduct);
// router.put("/:id", updateProduct);

router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
