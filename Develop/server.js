const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT||5001;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(apiRoutes);
app.use(webRoutes);

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);

});
