const {
  addFuel,
  getFuel,
  updateFuelByid,
  deleteFuelById,
  getFuelById,
} = require("../controllers/fuel");

const router = require("express").Router();

router.post("/create", addFuel);
router.get("/all", getFuel);
router.get("/:id", getFuelById);
router.delete("/:id", deleteFuelById);
router.put("/:id", updateFuelByid);

module.exports = router;
