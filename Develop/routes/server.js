const express = require('express');
const app = express();
const webRoutes = require('./web');
const apiRoutes = require('./api');

const PORT = process.env.PORT||5001;

app.use(webRoutes);
app.use(apiRoutes);
app.use(express.static('public'));
app.use(express.static('assets'));

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);

});
