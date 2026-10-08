import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import noteRouter from "./routes/noteRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/auth", authRouter);
app.use("/notes", noteRouter);

const PORT = process.env.PORT || 5000;  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






