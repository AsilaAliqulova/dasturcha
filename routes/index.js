const router = require("express").Router();

const Station = require("./fuel_station");
const Region = require("./region");
const District = require("./district")
const Fuel = require("./fuel");
const FuelType = require("./fuelType");
const FuelPrice = require("./fuelPrice");
const Orders = require("./orders");
const OrderFuel = require("./orderFuel")




router.use("/station", Station);
router.use("/region", Region);
router.use("/district", District);
router.use("/fuel", Fuel);
router.use("/fueltype", FuelType);
router.use("/fuelprice", FuelPrice);
router.use("/orders", Orders);
router.use("/orderFuel", OrderFuel);

module.exports = router;
