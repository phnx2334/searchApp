import express from "express";
import searchRoutes from "./routes/search";
import { get404 } from "./controllers/error";

const app = express();

app.use(express.urlencoded());

//Routes
app.use("/api/v1", searchRoutes);
app.use(get404);
app.listen(3000);
