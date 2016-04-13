const net = require("net");
const fs = require("fs");
const expect = require("chai").expect;
require(__dirname + "/../lib/tcp_server.js");

describe("log server", () => {
  it("should log to a file", (done) => {
    var client = net.connect({ port: 3000 }, () => {
      client.write("Tests FTW!");
    });

    client.on("data", (chunk) => {
      var fileContents = fs.readFileSync(__dirname + "/../logs/" + chunk.toString());

      expect(fileContents.toString()).to.eql("Tests FTW!");
      done();
    });
  });
});
