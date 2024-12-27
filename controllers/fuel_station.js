const FuelStation = require("../schemas/Fuel_station");

const getFuelStation = async (req, res) => {
  try {
    const station = await FuelStation.find({})
      .populate("region_id")
      .populate("district_id");
    res.send({ station });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addFuelStation = async (req, res) => {
  try {
    const data = req.body;
    const station = await FuelStation({ data });
    await station.save();
    res.send({ station });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteFuelStationById = async (req, res) => {
  try {
    const id = req.params.id;
    const station = await FuelStation.findByIdAndDelete(id);
    res.send({ station });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateFuelStationByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const station = await FuelStation.findByIdAndUpdate(id, data);
    console.log(station);
    res.send({ station });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getFuelStationById = async (req, res) => {
  try {
    const id = req.params.id;
    const station = await FuelStation.findById(id);
    console.log(station);
    res.send({ station });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  getFuelStation,
  addFuelStation,
  deleteFuelStationById,
  updateFuelStationByid,
  getFuelStationById,
};
