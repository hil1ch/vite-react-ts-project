import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type FileDto = {
   id: string;
   AuthorId: string,
   Title: string,
   Description: string,
   isOpen: boolean,
   MailsToAccess: string[],
   TagsNames: string[],
   File: File,
}

export const fileListApi = {
   baseKey: 'myFiles',

   getFileListQueryOptions: (userId: string) => {
      return queryOptions({
         queryKey: [fileListApi.baseKey, "list", userId], 
         queryFn: (meta) => jsonApiInstance<FileDto[]>(`/api/Document/GetUserDocuments?userId=${userId}`, {signal: meta.signal}),
      });
   },

   createFile: (data: FileDto) => {
      return jsonApiInstance<FileDto>(`/api/Document/SaveNewDocument`, {
         method: 'POST',
         json: data
      })
   },

   deleteFile: (id: string) => {
      return jsonApiInstance(`/api/Document/DeleteDocument/${id}`, {
        method: "DELETE"
      });
   }
}