const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({message:'server is up'})
})

app.listen(3333);