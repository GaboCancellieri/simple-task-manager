import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connect } from "mongoose";
import taskRoutes from "./routes/task.routes.js";

class Server {
  app;
  host = "localhost";
  port = "3001";

  constructor() {
    this.app = express();
    this.app.use(express.json({ limit: "200mb" }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    connect("mongodb://localhost:27017/taskdb");
    this.app.use("/api/tasks", taskRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
