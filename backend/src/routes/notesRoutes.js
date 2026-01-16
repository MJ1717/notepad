import express from "express";  
import { getAllNotes, get_note_by_id, createNote, putNote, deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.get("/:id", get_note_by_id);

router.post("/", createNote);

router.put("/:id", putNote);

router.delete("/:id", deleteNote);