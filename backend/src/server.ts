import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3330, () => console.log("Server is running in https://localhost:3330"));