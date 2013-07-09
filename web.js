fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  response.send(data);
});
