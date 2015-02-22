var request = require("request"),
  debug = require("debug")("osm-taskmanager-client");
sprintf = require("sprintf");

module.exports = client;

var request = request.defaults({
  headers: {
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});

function client() {
  if (!(this instanceof client)) {
    return new client()
  }
  this.baseUrl = "http://tasks.hotosm.org";

}

client.prototype.project = function(projectId, cb) {
  var url = sprintf("%s/project/%s.json", this.baseUrl, projectId);
  debug("Requesting %s", url);
  jsonget(url, function(err, data) {
    cb(err, data);
  });
};

client.prototype.tasks = function(projectId, cb) {
  var url = sprintf("%s/project/%s/tasks.json", this.baseUrl, projectId);
  debug("Requesting %s", url);
  jsonget(url, function(err, data) {
    cb(err, data);
  });
};

client.prototype.stats = function(projectId, cb) {
  var url = sprintf("%s/project/%s/stats", this.baseUrl, projectId);
  debug("Requesting %s", url);
  jsonget(url, function(err, data) {
    cb(err, data);
  });
};

client.prototype.contributors = function(projectId, cb) {
  var url = sprintf("%s/project/%s/contributors", this.baseUrl, projectId);
  debug("Requesting %s", url);
  jsonget(url, function(err, data) {
    cb(err, data);
  });
};

function jsonget(url, cb) {
  request.get(url, function(err, res, data) {
    try {
      data = JSON.parse(data);

    } catch (e) {
      return cb(e);
    }
    cb(err, data);
  });
}