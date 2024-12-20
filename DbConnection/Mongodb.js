
const {MongoClient, ServerApiVersion} = require('mongodb');
 const datas =process.env.MONGO_URI;
const client = new MongoClient(datas,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
})

async function run() {
    try{
        await client.connect();

        await client.db("admin").command({ping:1});
        console.log("Pinged you deployment. You successfully connected to MongoDB!");
    }finally{
        console.log("Closing the connection");
        await client.close();
    }
}

run().catch(console.dir);