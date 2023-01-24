import { MongoClient } from 'mongodb'
// const MongoClient = require('mongodb')

const host = 'localhost'
const port = '27017'
const uri = `mongodb://${host}:${port}`
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

await client.connect()
const db = client.db("coderhouse")
const coleccion = db.collection("clientes")
const clientes = await coleccion.find().toArray()
console.log(clientes)
await client.close()