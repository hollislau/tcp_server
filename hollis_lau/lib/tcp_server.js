const net = require("net");
const fs = require("fs");

var server = net.createServer((socket) => {
  var ct = new Date();
  var log = fs.createWriteStream(__dirname + "/../logs/" + ct);

  socket.pipe(log);
  socket.on("data", () => {
    socket.write("" + ct);
    socket.end();
  });
});

server.listen(3000, () => {
  process.stdout.write("Server listening on port 3000\n");
});
