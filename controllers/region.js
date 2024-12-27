const Region = require("../schemas/region");

const getRegion = async (req, res) => {
  try {
    const region = await Region.find();
    res.send({ region });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addRegion = async (req, res) => {
  try {
    const data = req.body;
    const region = await Region(data);
    await region.save();
    res.send({ region });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteRegionById = async (req, res) => {
  try {
    const id = req.params.id;
    const region = await Region.findByIdAndDelete(id);
    res.send({ region });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateRegionByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const region = await Region.findByIdAndUpdate(id, data);
    console.log(region);
    res.send({ region });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getRegionById = async (req, res) => {
  try {
    const id = req.params.id;
    const region = await Region.findById(id);
    console.log(region);
    res.send({ region });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addRegion,
  getRegion,
  updateRegionByid,
  deleteRegionById,
  getRegionById,
};
