import { Router } from "express";
import Author from "../db/models/Author";

const router = Router();

router.get("/", async (req, res) => {
  const search = req.query.AuthorTitle;
  const Authors = await Author.find();

  if (search) {
    const filteredAuthors = Authors.filter((Author) => Author.title.includes(search));
    return res.json(filteredAuthors);
  }

  res.json(Authors);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const Authors = await Author.find();
  const requestedAuthor = Authors.find((Author) => Author.id === id);

  res.json(requestedAuthor);
});

router.post("/", async (req, res) => {
  const Author = req.body;

  const createdAuthor = new Author(Author);
  await createdAuthor.save();

  res.json(createdAuthor);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const Author = req.body;
  const updatedAuthor = await Author.updateById(id, Author);
  res.json(updatedAuthor);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
   await Author.deleteById(id);
  res.sendStatus(200);
});

export default router;
