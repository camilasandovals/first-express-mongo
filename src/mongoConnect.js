import { MongoClient } from "mongodb";
import { MONGOURI } from "../credentials.js";

const client = new MongoClient(MONGOURI);

export const db = client.db("my-garden")