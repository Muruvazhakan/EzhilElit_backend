const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT || 4000;
const cors= require('cors');

const dotenv = require("dotenv").config();
const datas =process.env.MONGO_URI;
const mainRoute = require('./Routes/mainRoute');
const { default: mongoose } = require('mongoose');
const { Storage,TransferManager } = require("@google-cloud/storage");
let multer = require('multer');

const storage = new Storage({
    projectId: "helpone-9bf33",
    keyFilename:"../helpone-d08bde72c412_gcp-storage.json"
  });

  const bucketName = 'helpone-9bf33.appspot.com';
  const bucket = storage.bucket(bucketName);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

const upload = multer({
    storage:multer.memoryStorage()
})
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.post('/upload', upload.single('file'), async(req,res) =>{
    const file=req.file
    if(!file){
        res.status(400).send("no file");
    }

    const fileName = "1234.jpg";

    const blob=bucket.file(fileName)
    const blobStream = blob.createWriteStream({
        metadata:{
            contentType:file.mimetype
        }
    })

    blobStream.on('error',(err) =>{
        res.status(500).send(err)
    } )

    blobStream.on('finish', ()=>{
        res.send("file upload")
    })

    blobStream.end(file.buffer)
})




app.get('/get',(req,res,next) =>{
    //console.log("app inside");
     res.status(200).json('got request');
   });

app.use('/',mainRoute);

mongoose.connect(datas)
.then(() =>{
    app.listen(port, () =>{
        console.log("Server Running in "+ port);
    });
}).catch( err =>{
    console.log(err);
});