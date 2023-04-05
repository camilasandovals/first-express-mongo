import { ObjectId } from 'mongodb';
import { db } from './mongoConnect.js'
const coll = db.collection('plants')



// GET
export async function getAllPlants(req, res) {
    const plants = await coll.find({}).toArray();
    res.send(plants);
}

// POST
export async function addPlant(req, res) { 
    const newPlant = req.body
    await coll.insertOne(newPlant);
    res.status(201).send({ message: "new plant added"})
}

// DELETE
export async function deletePlant(req, res) {
    const docId = { "_id": new ObjectId(req.params.docIdentifier) };
    await coll.deleteOne( docId );
    res.status(201).send({ message: "plant has been deleted"})
}