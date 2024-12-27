const {
  addOrders,
  getOrders,
  updateOrdersByid,
  deleteOrdersById,
  getOrdersById,
} = require("../controllers/orders");

const router = require("express").Router();

router.post("/create", addOrders);
router.get("/all", getOrders);
router.get("/:id", getOrdersById);
router.delete("/:id", deleteOrdersById);
router.put("/:id", updateOrdersByid);

module.exports = router;
