import http from "node:http";

// Criação de task, Listagem, Atualização, Remoção, Marcar tarefa como completa, 
// Desafio: importação / exportação em massa de tarefas para um arquivo csv
// 

const server = http.createServer( async (request, response) => {

    return response.writeHead(404).end();
})

server.listen(3000);