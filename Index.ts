import express, { Application } from "express";
import cors from "cors";


const app: Application = express();

const port: number = 4000;

app.use(express.json());
app.use(cors());



const server = app.listen(port, () => {
  
  console.log("Server connected");
});

process.on("uncaughtException", (error: Error) => {
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log(reason);
  server.close(() => {
    process.exit(1);
  });
});