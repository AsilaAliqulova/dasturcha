const OrderFuel = require("../schemas/orderFuel");

const getOrderFuel = async (req, res) => {
  try {
    const orderFuel = await OrderFuel.find({}).populate("order_id").populate("fuel_id");
    res.send({ orderFuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addOrderFuel = async (req, res) => {
  try {
    const data = req.body;
    const orderFuel = await OrderFuel(data);
    await orderFuel.save()
    res.send({ orderFuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteOrderFuelById = async (req, res) => {
  try {
    const id = req.params.id;
    const orderFuel = await OrderFuel.findByIdAndDelete(id);
    res.send({ orderFuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateOrderFuelByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const orderFuel = await OrderFuel.findByIdAndUpdate({ _id: id }, data);
    console.log(orderFuel);
    res.send({ orderFuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getOrderFuelById = async (req, res) => {
  try {
    const id = req.params.id;
    const orderFuel = await OrderFuel.findById(id);
    console.log(orderFuel);
    res.send({ orderFuel });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addOrderFuel,
  getOrderFuel,
  updateOrderFuelByid,
  deleteOrderFuelById,
  getOrderFuelById,
};
