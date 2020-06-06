const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/mega-back'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/mega-back/index.html'));});
app.listen(process.env.PORT || 8080);
