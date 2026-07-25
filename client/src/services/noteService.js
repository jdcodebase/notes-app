import API from "./api";

export const createNote = (note) => API.post("/notes", note);

export const getNotes = () => API.get("/notes");

export const updateNote = (id, note) => API.put(`/notes/${id}`, note);

export const deleteNote = (id) => API.delete(`/notes/${id}`);
