import http from "node:http";
import { stdout } from "node:process";

const server = http.createServer( async (request, response) => {
    
    return response.writeHead(404).end();
})

server.listen(3000);