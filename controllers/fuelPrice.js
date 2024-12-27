const FuelPrice = require("../schemas/fuelPrice");

const getFuelPrice = async (req, res) => {
  try {
    const fuelPrice = await FuelPrice.find({}).populate("fuel_station_id").populate("fuel_type_id");
    res.send({ fuelPrice });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addFuelPrice = async (req, res) => {
  try {
    const data = req.body;
    const fuelPrice = await FuelPrice(data);
    await fuelPrice.save()
    res.send({ fuelPrice });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteFuelPriceById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuelPrice = await FuelPrice.findByIdAndDelete(id);
    res.send({ fuelPrice });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateFuelPriceByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const fuelPrice = await FuelPrice.findByIdAndUpdate({ _id: id }, data);
    console.log(fuelPrice);
    res.send({ fuelPrice });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getFuelPriceById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuelPrice = await FuelPrice.findById(id);
    console.log(fuelPrice);
    res.send({ fuelPrice });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addFuelPrice,
  getFuelPrice,
  updateFuelPriceByid,
  deleteFuelPriceById,
  getFuelPriceById,
};
