const express = require('express');

const serverConfig = require('./configs/server.config');

const app = express();
app.get('/',(req,res) => {
    res.send({
        message:"api is working fine"
    })
})


app.listen(serverConfig.PORT, () => {
    console.log(`application started on port ${serverConfig.PORT}`);
})