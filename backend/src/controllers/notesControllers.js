import  Note  from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } 
    catch (error) {
        console.error("Error in get all notes:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function get_note_by_id (req, res) {
    try {
        const noteid = req.params.id;
        const note = await Note.findById(noteid);

        if (!note) {
            return res.status(404).json({message: "note id not founded"})
        }   

        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error in get note by id:", error);
        res.status(500).json({ message: "Server error" });
    }

}

export async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title: title, content: content});

        const saved_note = await newNote.save();
        res.status(201).json(saved_note);
    }
    catch (error) {
        console.error("Error in create note:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function putNote(req, res) {
    try {
        const {title, content} = req.body;
        const noteid = req.params.id;

        const upated_note = await Note.findByIdAndUpdate(noteid, 
            {title: title, content: content}, {new: true});
        if (!upated_note) {
            return res.status(404).json({message: "note id not founded"})
        }
        
        res.status(200).json({ messsage: "note updated"});
    }
    catch (error) {
        console.error("Error in put note:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const noteid = req.params.id;
        const deleted_note = await Note.findByIdAndDelete(noteid);

        if (!deleted_note) {
            return res.status(404).json({message: "note id not founded"})
        } 

        res.status(200).json({message: "note deleted"});
    }
    catch (error) {
        console.error("Error in delete note:", error);
        res.status(500).json({ message: "Server error" });
    }
}