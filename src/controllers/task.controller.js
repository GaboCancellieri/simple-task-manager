import Task from "../models/task.model.js";

// Obtener todas las tareas
export async function getTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
}

// Crear una nueva tarea
export async function createTask(req, res) {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Obtener una tarea específica por ID
export async function getTaskById(req, res) {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
}

// Actualizar una tarea
export async function updateTask(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Eliminar una tarea
export async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(`Task ${req.params.taskId} deleted`);
  } catch (err) {
    res.status(500).send(err);
  }
}
