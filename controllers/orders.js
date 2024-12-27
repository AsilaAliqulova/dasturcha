const Orders = require("../schemas/orders");

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({}).populate("fuel_station_id");
    res.send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const addOrders = async (req, res) => {
  try {
    const data = req.body;
    const orders = await Orders(data);
    await orders.save()
    res.send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const deleteOrdersById = async (req, res) => {
  try {
    const id = req.params.id;
    const orders = await Orders.findByIdAndDelete(id);
    res.send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const updateOrdersByid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const orders = await Orders.findByIdAndUpdate({ _id: id }, data);
    console.log(orders);
    res.send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

const getOrdersById = async (req, res) => {
  try {
    const id = req.params.id;
    const orders = await Orders.findById(id);
    console.log(orders);
    res.send({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Serverda hatolik" });
  }
};

module.exports = {
  addOrders,
  getOrders,
  updateOrdersByid,
  deleteOrdersById,
  getOrdersById,
};
