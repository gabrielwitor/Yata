import { buildRoutePath } from "../utils/build-route-path.js";

export const taskRoutes = [
{
    method: 'PUT',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
        return response.writeHead(201).end();
    }
}
];