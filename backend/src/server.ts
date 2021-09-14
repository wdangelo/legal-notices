import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { noticesRoutes } from "./routes/notices.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes)
app.use("/notices", noticesRoutes)

app.listen(3330, () => console.log("Server is running"));
