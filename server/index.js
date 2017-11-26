const express = require('express');
const app = express();
const config = require('config');
const PORT = config.has('PORT') ? config.get('PORT') : 3002;

//TODO: call the handlers folder and build out a get transactions method
app.get('/api/transactions/:username', (req, res) => {
  console.log('req.query ', req.query, req.params);
  res.sendStatus(200)
});
//TODO: call the handlers folder and build out a add transactions method
app.put('/api/transactions/:username', (req, res) => {

});
//TODO: call the handlers folder and build out add user method
app.post('/api/users', (req, res) => {

});

app.listen(PORT, () => console.log('listening on', PORT));
