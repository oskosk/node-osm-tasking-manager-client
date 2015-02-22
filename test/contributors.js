var client = require("..")();


client.contributors(847, function(err, data) {
  if (err) {
    return console.log(err);
  }
  Object.keys(data).forEach(function(contributor) {
    console.log(contributor);
  });

});