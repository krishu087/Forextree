import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<void> {

  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface

}
