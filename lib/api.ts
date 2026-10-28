import axios from "axios";
import type { Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export async function fetchNotes(
  page: number,
  search?: string
): Promise<FetchNotesResponse> {
  const params: Record<string, string | number> = {
    page,
    perPage: 12,
  };

  if (search) {
    params.search = search;
  }

  const response = await api.get<FetchNotesResponse>("", { params });
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<{ data: Note }>(`/${id}`);
  return response.data.data;
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const response = await api.post<{ data: Note }>("", payload);
  return response.data.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<{ data: Note }>(`/${id}`);
  return response.data.data;
}
