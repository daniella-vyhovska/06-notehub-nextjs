import axios from "axios";
import type { Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

// -----------------------------
// Типи відповіді API
// -----------------------------
export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
}

// -----------------------------
// GET — отримати список нотаток
// -----------------------------
export async function fetchNotes(
  page: number,
  search: string
): Promise<FetchNotesResponse> {
  const response = await api.get<FetchNotesResponse>("", {
    params: {
      page,
      ...(search ? { search } : {}),
    },
  });

  return response.data;
}

// -----------------------------
// GET — отримати нотатку за ID
// -----------------------------
export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<Note>(`/${id}`);
  return response.data;
}

// -----------------------------
// POST — створити нотатку
// -----------------------------
export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const response = await api.post<Note>("", payload);
  return response.data;
}

// -----------------------------
// DELETE — видалити нотатку
// -----------------------------
export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<Note>(`/${id}`);
  return response.data;
}
