import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes/index.js";


// Criação de task, Listagem, Atualização, Remoção, Marcar tarefa como completa, 
// Desafio: importação / exportação em massa de tarefas para um arquivo csv
// 

const server = http.createServer( async (request, response) => {
    
    await json(request, response);

    const route = routes.find((route)=>{

        return (route.method === request.method && request.url.match(route.path));
    })

    return response.writeHead(404).end();
})

server.listen(3000);