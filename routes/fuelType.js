const {
  addFuelType,
  getFuelType,
  updateFuelTypeByid,
  deleteFuelTypeById,
  getFuelTypeById,
} = require("../controllers/fuelType");

const router = require("express").Router();

router.post("/create", addFuelType);
router.get("/all", getFuelType);
router.get("/:id", getFuelTypeById);
router.delete("/:id", deleteFuelTypeById);
router.put("/:id", updateFuelTypeByid);

module.exports = router;
