const {
  addRegion,
  getRegion,
  updateRegionByid,
  deleteRegionById,
  getRegionById,
} = require("../controllers/region");

const router = require("express").Router();

router.post("/create", addRegion);
router.get("/all", getRegion);
router.get("/:id", getRegionById);
router.delete("/:id", deleteRegionById);
router.put("/:id", updateRegionByid);

module.exports = router;
