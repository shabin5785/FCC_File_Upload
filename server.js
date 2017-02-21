const express = require('express');
const path = require('path');
const multer = require('multer');


let upload = multer({ dest : '/'});

let app  = express();

app.get('/' , function(req,res){
	res.sendFile(path.join(__dirname+ '/public/upload.html'));
})

app.post('/filesize' , upload.single('uploadme'), function(req,res){
	res.send({"size" : req.file.size});
})

app.listen(process.env.PORT || 3000);
