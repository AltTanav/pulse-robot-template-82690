import type { Express } from "express";
import { storage } from "./storage";

export function registerRoutes(app: Express) {
  // Example API routes
  app.get("/api/examples", async (_req, res) => {
    const examples = await storage.getExamples();
    res.json(examples);
  });

  app.post("/api/examples", async (req, res) => {
    try {
      const example = await storage.createExample(req.body);
      res.json(example);
    } catch (error) {
      res.status(400).json({ error: "Invalid request" });
    }
  });
}
