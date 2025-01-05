import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type NoteDto = {
   id?: string;
   AuthorId: string,
   Text: string,
   Title: string,
   Description: string,
   IsOpen: boolean,
   TagsNames: string[],
   Files?: File[] | null,
   done?: boolean,
}

export const noteListApi = {
   baseKey: 'myNotes',

   getNoteListQueryOptions: () => {
      return queryOptions({
         queryKey: [noteListApi.baseKey, "list"], 
         queryFn: (meta) => jsonApiInstance<NoteDto[]>(`/api/Note/GetAllNotesByUser`, {signal: meta.signal}),
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
   },

   updateNote: (data: NoteDto & {id: string}) => {
      return jsonApiInstance<NoteDto>(`/api/Note/EditNote/${data.id}`, {
         method: 'PATCH',
         json: data
      })
   },
}