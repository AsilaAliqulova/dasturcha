const Fuel = require("../schemas/fuel");

const getFuel = async (req, res) => {
  try {
    const fuel = await Fuel.find({}).populate("type_id");
    res.send({ fuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addFuel = async (req, res) => {
  try {
    const data = req.body;
    const fuel = await Fuel({data});
    await fuel.save()
    res.send({ fuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteFuelById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuel = await Fuel.findByIdAndDelete(id);
    res.send({ fuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateFuelByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const fuel = await Fuel.findByIdAndUpdate(id, data);
    console.log(fuel);
    res.send({ fuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getFuelById = async (req, res) => {
  try {
    const id = req.params.id;
    const fuel = await Fuel.findById(id);
    console.log(fuel);
    res.send({ fuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addFuel,
  getFuel,
  updateFuelByid,
  deleteFuelById,
  getFuelById,
};
