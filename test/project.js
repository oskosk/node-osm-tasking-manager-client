var client = require("..")();


client.project(847, function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);

});