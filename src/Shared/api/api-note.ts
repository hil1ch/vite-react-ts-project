import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type NoteDto = {
   id: string;
   AuthorId: string,
   Text: string,
   Title: string,
   Description: string,
   IsOpen: boolean,
   TagsNames: string[],
   Files: File[],
}

export const noteListApi = {
   baseKey: 'myNotes',

   getNoteListQueryOptions: (userId: string) => {
      return queryOptions({
         queryKey: [noteListApi.baseKey, "list", userId], 
         queryFn: (meta) => jsonApiInstance<NoteDto[]>(`/api/Note/GetAllNotesByUser?userId=${userId}`, {signal: meta.signal}),
      });
   },

   createNote: (data: NoteDto) => {
      return jsonApiInstance<NoteDto>(`/api/Note/CreateNote`, {
         method: 'POST',
         json: data
      })
   },

   deleteNote: (id: string) => {
      return jsonApiInstance(`/api/Note/DeleteNote/${id}`, {
        method: "DELETE"
      });
    }
}