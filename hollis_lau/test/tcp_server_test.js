var expect = require("chai").expect;
var net = require("net");
var fs = require("fs");
require(__dirname + "/../lib/tcp_server.js");

describe("server", () => {
  var numFiles;
  before(() => {
    numFiles = fs.readdirSync(__dirname + "/../logs").length;
  });
  it("should log requests to a file", (done) => {
    var client = net.connect({ port: 3000 }, () => {
      client.write("Tests ftw!\n");
      client.end();
    });
    client.on("end", () => {
      var numFilesAfter = fs.readdirSync(__dirname + "/../logs").length;
      expect(numFilesAfter).to.eql(numFiles + 1);
      done();
    });
  });
});
