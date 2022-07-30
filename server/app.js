import express from "express";
import { connectToDatabase } from "./db/database";
import rootRouter from "./routes/root";
import booksRouter from "./routes/books";
import authorsRouter from "./routes/authors";
// import cors from "cors";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDatabase();

app.use("/", rootRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
export default app;

