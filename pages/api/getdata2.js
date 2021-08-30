import { connectToDatabase } from './mongodb';
export default async function getdata (req, res) {
  let query = {}
  let options = {}
  let { db } = await connectToDatabase()
  // let { body } = req
  // const bdcollection = body.collection
  const collection = await db.collection('index')
  const result = await collection.find(query,options).toArray()
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json(result);
  return
}