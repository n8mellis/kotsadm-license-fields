const express = require('express');
const rp = require("request-promise");

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  rp({
    uri: "http://kotsadm:3000/license/v1/license",
    json: true
  }).then(license => {
    console.log(license);
    res.render('index', { license: license });
  }).catch(err => {
    res.send("Received error: " + err)
  });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
