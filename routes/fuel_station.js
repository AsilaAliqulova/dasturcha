const {
  getFuelStation,
  addFuelStation,
  deleteFuelStationById,
  updateFuelStationByid,
  getFuelStationById,
} = require("../controllers/fuel_station");

const router = require("express").Router();

router.post("/create", addFuelStation);
router.get("/all", getFuelStation);
router.get("/:id", getFuelStationById);
router.delete("/:id", deleteFuelStationById);
router.put("/:id", updateFuelStationByid);


module.exports = router;