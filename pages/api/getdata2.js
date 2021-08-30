import  clientPromise  from "./lib/mongodb";
export default async (req, res) => {
  const client = await clientPromise;
  const movies = await client.db('unio')
    .collection("index")
    .find({})
    .limit(20)
    .toArray();
  res.json(movies);
};