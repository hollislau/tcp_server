const net = require("net");
const fs = require("fs");

const server = module.exports = net.createServer((socket) => {
  var file = new Date();
  var writeOut = fs.createWriteStream(__dirname + "/../logs/" + file);

  socket.pipe(writeOut);
});

server.listen(3000, () => {
  process.stdout.write("Server listening on port 3000\n");
});
