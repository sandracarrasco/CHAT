//instalamos dependencias npm install express@4.15.2  y npm install socket.io
var app = require('express')();    // express se inicializa que puede suministrar a un servidor HTTP
var http = require('http').Server(app);
var io = require('socket.io')(http);   // nos da el cliente automaticamente
var port = process.env.PORT || 8000;   // definimos el numero de puerto

// nos dirrige a index donde encontramos el codigo del cliente y de la pagina
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// en esta linea de codigo envia a todos el mensaje
io.on('connection', function(socket){
  socket.on('mensajes', function(msg){ 
    io.emit('mensajes', msg);   // envia el mensaje
  });
});

// el servidor esucha en el puerto 8000
http.listen(port, function(){
  console.log('Servidor levantado en el puerto:' + port);
});
