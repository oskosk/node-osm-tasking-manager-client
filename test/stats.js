var client = require("..")();


client.stats(826, function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data)

});