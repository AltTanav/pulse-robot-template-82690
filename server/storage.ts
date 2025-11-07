import type { InsertExample, SelectExample } from "@shared/schema";

export interface IStorage {
  // Example CRUD operations
  getExamples(): Promise<SelectExample[]>;
  createExample(data: InsertExample): Promise<SelectExample>;
}

export class MemStorage implements IStorage {
  private examples: SelectExample[] = [];
  private nextId = 1;

  async getExamples(): Promise<SelectExample[]> {
    return this.examples;
  }

  async createExample(data: InsertExample): Promise<SelectExample> {
    const example: SelectExample = {
      id: this.nextId++,
      name: data.name,
      createdAt: new Date(),
    };
    this.examples.push(example);
    return example;
  }
}

export const storage = new MemStorage();
