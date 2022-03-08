const express = require('express');
const app = express();
const webRoutes = require('./public/web');
const apiRoutes = require('./public/api');

const PORT = process.env.PORT||5001;
//creating a port and middleware
app.use(express.static('./public')); //making all files in public available
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(apiRoutes);
app.use(webRoutes);

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);

});
