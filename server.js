import mongoose from "mongoose";
import express from "express";

const app = express();
const port = 19004;

app.get("/", (req, res) => res.status(200).send("Healthy"));

app.listen(port, () => console.log(`listening on localhost:${port}`));
