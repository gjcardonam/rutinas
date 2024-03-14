import "dotenv/config";
import express from "express";
import { router } from "./infrastructure/Web/routes/rutina.routes"
import { dbInit } from "./infrastructure/DB/mongo.dbIniit";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

dbInit().then();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;