export function getAllNotes(req, res) {
    res.status(200).send("you got 9 notes");
}

export function createNote(req, res) {
    res.status(201).json({ message: "note created" }) ;
}

export function putNote(req, res) {
    res.status(201).json({ message: "note updated" }) ;
}

export function deleteNote(req, res) {
    res.status(201).json({ message: "note deleted" }) ;
}