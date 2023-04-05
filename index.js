import express from "express";
import cors from "cors";
import { getAllPlants, addPlant, deletePlant } from "./src/plants.js";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.get("/plants", getAllPlants);
app.post("/plants", addPlant);
app.delete("/plants/:docIdentifier", deletePlant)
//app.patch

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}...`);
});
