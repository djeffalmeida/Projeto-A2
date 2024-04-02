// *****************
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
// Curso: CTS Analise Desenvolvimento de Sistemas
// Disciplina: Topicos Avançados de SI - I
// Autor: Jeferson Almeida  -   Data: 01/04/2024
// Descrição: ProjAula 02
// *****************

//Modulos
const http = require('http');
const url  = require('url');

//Definição de Variaveis
const PORT = 9876;

//Criando Servidor
const server = http.createServer((req, res) => {
    //Modulo Url
    const reqUrl = url.parse(req, url, true);
    const path   = reqUrl.pathname;

    if (path === '/'){
        res.writeHead(200, {'Content-type':'text/plan; charset=utf-8'});
        res.end("Rota : Index ('/'");
    }else if(path === '/bhaskara'){
        res.writeHead(200, {'Content-type':'text/plan; charset=utf-8'});
        res.end("Rota : Bhaskara");
    }else if(path === '/emprestimo'){
        res.writeHead(200, {'Content-type':'text/plan; charset=utf-8'});
        res.end("Rota : Emprestimo");
    }else if(path === '/inss'){
            res.writeHead(200, {'Content-type':'text/plan; charset=utf-8'});
            res.end("Rota : INSS");
    }else{
        res.writeHead(404, {'Content-type':'text/plan; charset=utf-8'});
        res.end("404 - Pagina Não Encontrada ...");
    }

});

//Config Server
server.listen(PORT, () => {
    console.log(`[ok] - Servidor Iniciado na Porta: ${PORT}`);
});