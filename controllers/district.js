const District = require("../schemas/district");

const getDistrict = async (req, res) => {
  try {
    const district = await District.find({}).populate("regionId");
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addDistrict = async (req, res) => {
  try {
    const data = req.body;
    const district = await District({data});

    await district.save()
    console.log(district);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteDistrictById = async (req, res) => {
  try {
    const id = req.params.id;
    const district = await District.findByIdAndDelete(id);
    console.log(district);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateDistrictByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const district = await District.findByIdAndUpdate(id, data);
    console.log(district);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getDistrictById = async (req, res) => {
  try {
    const id = req.params.id;
    const district = await District.findById(id);
    console.log(district);
    res.send({ district });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addDistrict,
  getDistrict,
  updateDistrictByid,
  deleteDistrictById,
  getDistrictById,
};
