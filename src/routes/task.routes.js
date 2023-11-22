import { Router } from "express";
import * as TaskController from "../controllers/task.controller.js";

const router = Router();

// Obtener todas las tareas y crear una nueva tarea
router.get("/", TaskController.getTasks);
router.post("/", TaskController.createTask);

// Obtener, actualizar y eliminar una tarea específica
router.get("/:taskId", TaskController.getTaskById);
router.put("/:taskId", TaskController.updateTask);
router.delete("/:taskId", TaskController.deleteTask);

export default router;
