import { taskRoutes } from "./Task.routes.js";

import { Database } from "../middlewares/database.js";

// Instance of Database used by all routes.
export const database = new Database();

// Instance of Date used by all routes.
export const now = new Date();

export const routes = [...taskRoutes]