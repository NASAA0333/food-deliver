import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";

const PORT = 8000;
const app = express();
app.use(express.json());

configDotenv();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello from backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
