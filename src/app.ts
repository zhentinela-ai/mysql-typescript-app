import express, { Application } from "express";
import morgan from "morgan";

// Routes
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/pots.routes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use("/posts", PostRoutes);
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server is running on port", this.app.get("port"));
  }
}
