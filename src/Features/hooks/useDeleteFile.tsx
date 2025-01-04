import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fileListApi } from "../../Shared/api/api-file";

export function useDeleteFile() {
   const queryClient = useQueryClient();

   const deleteFileMutation = useMutation({
      mutationFn: fileListApi.deleteFile,

      async onSettled() {
         queryClient.invalidateQueries({ queryKey: [fileListApi.baseKey] });
      },

      onSuccess: (_, deletedId) => {
         queryClient.setQueryData(
            fileListApi.getFileListQueryOptions().queryKey,
            (files) => files?.filter((file) => file.id !== deletedId)
         );
      }
   })

   return {
      handleDelete: deleteFileMutation.mutate,
      isPending: deleteFileMutation.isPending
   }
}  