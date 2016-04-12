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
    net.connect({ port: 3000 }, () => {
      var numFilesAfter = fs.readdirSync(__dirname + "/../logs").length;
      expect(numFilesAfter).to.eql(numFiles + 1);
      done();
    });
  });
});
