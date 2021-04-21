const http = require('http');
const app = require('./app');


const server = http.createServer(app);

server.listen(process.env.PORT,  () => {
console.log(`Servidor ouvindo na porta ${process.env.PORT}` );

});