import { buildRoutePath } from "../utils/build-route-path.js";
import {randomUUID} from "node:crypto"

import { database, now } from "./index.js";
import { title } from "node:process";
import { log } from "node:console";

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
},

// Get All tasks (filters avaiable)
{
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {

        const data = database.select('tasks', null, (Object.keys(request.query).length > 0) ? request.query : null);

        return response.writeHead(200).end(JSON.stringify(data));
    }
},

// Get specific task

{
    method: 'GET',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
        
        const data = database.select('tasks',request.params.id);

        // if data is an empty object, no task was found.
        if (Object.keys(data).length === 0){
            return response.writeHead(404).end(JSON.stringify({
                error: `couldn\'t find a task with id ${request.params.id}`
            }))
        }

        return response.writeHead(200).end(
            JSON.stringify(data)
        );
    }
}
];