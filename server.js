const http = require('http');
const app = require('./app');


const server = http.createServer(app);

server.listen(process.env.Port,  () => {
console.log(`Servidor ouvindo na porta ${process.env.PORT}` );

});