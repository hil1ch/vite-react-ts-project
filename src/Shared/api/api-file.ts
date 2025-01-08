import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type FileDto = {
   id?: string;
   AuthorId: string,
   Title: string,
   Description: string,
   IsOpen: boolean,
   MailsToAccess?: string[] | null,
   TagsNames: string[],
   File?: File,
   done?: boolean
}

export const fileListApi = {
   baseKey: 'myFiles',

   getFileListQueryOptions: () => {
      return queryOptions({
         queryKey: [fileListApi.baseKey, "list"], 
         queryFn: (meta) => jsonApiInstance<FileDto[]>(`/myFiles`, {signal: meta.signal}),
      });
   },

   createFile: (data: FileDto) => {
      return jsonApiInstance<FileDto>(`/myFiles`, {
         method: 'POST',
         json: data
      })
   },

   deleteFile: (id: string) => {
      return jsonApiInstance(`/myFiles/${id}`, {
        method: "DELETE"
      });
   },

   updateFile: (data: FileDto & {id: string}) => {
      return jsonApiInstance<FileDto>(`/myFiles/${data.id}`, {
         method: 'PATCH',
         json: data
      })
   },
}