const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://unio:UKqT_H2bv7!zU!D@cluster0.hx0my.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
module.exports = async (req, res) => {
  try {
    await client.connect();
    const database = client.db('unio');
    const indexs = database.collection('index');
    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const options = {}
    const result = await indexs.find(query,options).toArray()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}