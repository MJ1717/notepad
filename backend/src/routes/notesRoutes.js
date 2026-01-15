import express from "express";  
import { getAllNotes, createNote, putNote, deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", putNote);

router.delete("/:id", deleteNote);