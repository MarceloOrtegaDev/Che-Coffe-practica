import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
  deletOrderById,
  getOrdersById
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", validateJwt, getOrdersCtrl);
ordersRouter.post("/", validateJwt, createOrderCtrl)
ordersRouter.delete("/:id", validateJwt, deletOrderById)
ordersRouter.get("/:id", validateJwt, getOrdersById)

export { ordersRouter };
