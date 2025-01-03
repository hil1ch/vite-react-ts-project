import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fileListApi } from "../../Shared/api/api-file";

export function useDeleteFile(userId: string) {
   const queryClient = useQueryClient();

   const deleteFileMutation = useMutation({
      mutationFn: async (documentId : string) => {
         return fileListApi.deleteFile(documentId);
      },

      async onSettled() {
         queryClient.invalidateQueries({ queryKey: [fileListApi.baseKey] });
      },

      onSuccess: (_, deletedId) => {
         queryClient.setQueryData(
            fileListApi.getFileListQueryOptions(userId).queryKey,
            (files) => files?.filter((file) => file.id !== deletedId)
         );
      }
   })

   return {
      handleDelete: deleteFileMutation.mutate,
      isPending: deleteFileMutation.isPending
   }
}  