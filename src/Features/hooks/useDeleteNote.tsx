import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteListApi } from "../../Shared/api/api-note";

export function useDeleteNote(userId: string) {
   const queryClient = useQueryClient();

   const deleteNoteMutation = useMutation({
      mutationFn: async (noteId : string) => {
         return noteListApi.deleteNote(noteId);
      },

      async onSettled() {
         queryClient.invalidateQueries({ queryKey: [noteListApi.baseKey] });
      },

      onSuccess: (_, deletedId) => {
         queryClient.setQueryData(
            noteListApi.getNoteListQueryOptions(userId).queryKey,
            (notes) => notes?.filter((note) => note.id !== deletedId)
         );
      }
   })

   return {
      handleDelete: deleteNoteMutation.mutate,
      isPending: deleteNoteMutation.isPending
   }
}  