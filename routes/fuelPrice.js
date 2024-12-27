const {
  addFuelPrice,
  getFuelPrice,
  updateFuelPriceByid,
  deleteFuelPriceById,
  getFuelPriceById,
} = require("../controllers/fuelPrice");

const router = require("express").Router();

router.post("/create", addFuelPrice);
router.get("/all", getFuelPrice);
router.get("/:id", getFuelPriceById);
router.delete("/:id", deleteFuelPriceById);
router.put("/:id", updateFuelPriceByid);

module.exports = router;
