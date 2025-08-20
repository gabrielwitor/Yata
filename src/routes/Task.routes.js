import { buildRoutePath } from "../utils/build-route-path.js";
import {randomUUID} from "node:crypto"

import { database, now } from "./index.js";

export const taskRoutes = [
{
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
        const {title, description} = request.body || {};

        if(!title || !description){
            return response.writeHead(400).end(JSON.stringify({
                error: 'title or description missing.'
            }))
        }

        const task = {
            id: randomUUID(),
            title,
            description,
            completed_at: null,
            created_at: now.toISOString(),
            updated_at: null
        }


        database.insert('tasks',task)
        return response.writeHead(201).end();
    }
}
];