const fuel = require("../schemas/fuel");
const FuelType = require("../schemas/fuelType");

const getFuelType = async (req, res) => {
  try {
    const fuelType = await FuelType.find();
    res.send({ fuelType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addFuelType = async (req, res) => {
  try {
    const data = req.body;
    const fuelType = await FuelType(data);
    await fuelType.save()
    res.send({ fuelType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteFuelTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuelType = await FuelType.findByIdAndDelete(id);
    res.send({ fuelType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateFuelTypeByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const fuelType = await FuelType.findByIdAndUpdate({ _id: id }, data);
    console.log(fuelType);
    res.send({ fuelType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getFuelTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuelType = await FuelType.findById(id);
    console.log(fuelType);
    res.send({ fuelType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addFuelType,
  getFuelType,
  updateFuelTypeByid,
  deleteFuelTypeById,
  getFuelTypeById,
};
