import API from './api';
import type { Note, NoteInput } from '../types/note';

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

export const createNote = (note: NoteInput) =>
  API.post<ApiResponse<Note>>('/notes', note);

export const getNotes = () => API.get<ApiResponse<Note[]>>('/notes');

export const updateNote = (id: string, note: NoteInput) =>
  API.put<ApiResponse<Note>>(`/notes/${id}`, note);

export const deleteNote = (id: string) => API.delete(`/notes/${id}`);
