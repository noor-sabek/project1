const express = require('express')
const app = express();
const port = 8000;



//GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
