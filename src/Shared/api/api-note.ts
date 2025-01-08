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
         queryFn: (meta) => jsonApiInstance<NoteDto[]>(`/myNotes`, {signal: meta.signal}),
      });
   },

   createNote: (data: NoteDto) => {
      return jsonApiInstance<NoteDto>(`/myNotes`, {
         method: 'POST',
         json: data
      })
   },

   deleteNote: (id: string) => {
      return jsonApiInstance(`/myNotes/${id}`, {
        method: "DELETE"
      });
   },

   updateNote: (data: NoteDto & {id: string}) => {
      return jsonApiInstance<NoteDto>(`/myNotes/${data.id}`, {
         method: 'PATCH',
         json: data
      })
   },
}