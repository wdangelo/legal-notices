import express from "express";
import { routes } from "./routes";
import cors from 'cors';

import "./database"
import "./shared/container"
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(express.static('tmp'))

app.listen(3330, () => console.log("Server is running"));
