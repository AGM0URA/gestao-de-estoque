import express from "express";
import cors from "cors"
import "dotenv/config"
import conn from "./config/conn.js"


import "./models/produtosModels.js"

import produtosRouter from"./routes/produtosRoutes.js";

const PORT = process.env.PORT || 3333;
const app = express();

app.use(
    cors({
      origin: process.env.CORS_ALLOWED_ORIGINS || "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Olá, Mundo!"); 
  });

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));  

app.use("/produtos", produtosRouter);

app.use((request, response) => {
    response.status(404).json({ message: "Rota nao encontrada" });
  });