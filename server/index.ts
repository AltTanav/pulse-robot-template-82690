import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = app.listen(5000, "0.0.0.0", () => {
  console.log(`Server running on port 5000`);
});

(async () => {
  registerRoutes(app);
  
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
})();
