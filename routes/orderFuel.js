const {
  addOrderFuel,
  getOrderFuel,
  updateOrderFuelByid,
  deleteOrderFuelById,
  getOrderFuelById,
} = require("../controllers/orderFuel");

const router = require("express").Router();

router.post("/create", addOrderFuel);
router.get("/all", getOrderFuel);
router.get("/:id", getOrderFuelById);
router.delete("/:id", deleteOrderFuelById);
router.put("/:id", updateOrderFuelByid);

module.exports = router;
