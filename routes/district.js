const {
  addDistrict,
  getDistrict,
  updateDistrictByid,
  deleteDistrictById,
  getDistrictById,
} = require("../controllers/district");

const router = require("express").Router();

router.post("/create", addDistrict);
router.get("/all", getDistrict);
router.get("/:id", getDistrictById);
router.delete("/:id", deleteDistrictById);
router.put("/:id", updateDistrictByid);


module.exports = router;