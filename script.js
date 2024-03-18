//const {exec}=require('child-process');
const express = require('express');
const path =require('path');
const app = express();
const bodyParser = require('body-parser'); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});