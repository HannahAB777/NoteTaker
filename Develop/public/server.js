const express = require('express');
const app = express();
const webRoutes = require('../routes/web');
const apiRoutes = require('./api');

const PORT = process.env.PORT||5001;

app.use(webRoutes);
app.use(apiRoutes);
app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);

});
