import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fileListApi } from "../../Shared/api/api-file";

export function useToggleFile() {
   const queryClient = useQueryClient();

   const updateFileMutation = useMutation({
      mutationFn: fileListApi.updateFile,
      onMutate: async (newFile) => {
         await queryClient.cancelQueries({ queryKey: [fileListApi.baseKey] })
     
         const previousTodos = queryClient.getQueryData(fileListApi.getFileListQueryOptions().queryKey)
         queryClient.setQueryData(fileListApi.getFileListQueryOptions().queryKey, old => old?.map(file => file.id === newFile.id ? {...file, ...newFile} : file));
         return { previousTodos }
       },

       onError: (_, __, context) => {
         if (context) {
            queryClient.setQueryData(fileListApi.getFileListQueryOptions().queryKey, context.previousTodos)
         }
       },
       onSettled: () => {
         queryClient.invalidateQueries({ queryKey: [fileListApi.baseKey] })
       },
   })

   const toggleFile = (id: string, done: boolean) => {

      updateFileMutation.mutate({
         id,
         done: !done,
         AuthorId: "",
         Title: "",
         Description: "",
         IsOpen: false,
         MailsToAccess: [],
         TagsNames: [],
      });

   }

   return {
      toggleFile,
   }
}  