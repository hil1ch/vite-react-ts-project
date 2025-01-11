import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type FileDto = {
   id: string;
   url: string;
}

export const fileListApi = {
   baseKey: 'uploads',

   getFileListQueryOptions: () => {
      return queryOptions({
         queryKey: [fileListApi.baseKey, "list"], 
         queryFn: (meta) => jsonApiInstance<FileDto[]>(`/uploads`, {signal: meta.signal}),
      });
   },

   deleteFile: (id: string) => {
      return jsonApiInstance(`/uploads/${id}`, {
        method: "DELETE"
      });
   },
}