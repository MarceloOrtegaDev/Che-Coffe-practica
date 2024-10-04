import { createOrder, getOrders, deleteOrderById, getOrderById } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const { coffee, userId } = req.body;
  console.log(`Creating order for userId: ${userId}, coffee: ${coffee}`);

  const order = createOrder(coffee, userId);
  
  console.log("Order created:", order);
  return res.status(201).json(order);
};


export const getOrdersById = async (req, res) => {
  const { id } = req.params.id;
  const order = await getOrderById(id);
  if (!order) {
    res.status(400).json({ msg: "No se encontró la orden" })
  }

  res.status(200).json(order);
}

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};

export const deletOrderById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const deleteOrder = await deleteOrderById(id);

    res.status(201).json({ msg: "Order eliminada correctamente" + { deleteOrder } })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting order" });
  }

}