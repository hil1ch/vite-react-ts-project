import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteListApi } from "../../Shared/api/api-note";

export function useToggleNote() {
   const queryClient = useQueryClient();

   const updateNoteMutation = useMutation({
      mutationFn: noteListApi.updateNote,
      onMutate: async (newNote) => {
         await queryClient.cancelQueries({ queryKey: [noteListApi.baseKey] })
     
         const previousTodos = queryClient.getQueryData(noteListApi.getNoteListQueryOptions().queryKey)
         queryClient.setQueryData(noteListApi.getNoteListQueryOptions().queryKey, old => old?.map(note => note.id === newNote.id ? {...note, ...newNote} : note));
         return { previousTodos }
       },

       onError: (_, __, context) => {
         if (context) {
            queryClient.setQueryData(noteListApi.getNoteListQueryOptions().queryKey, context.previousTodos)
         }
       },
       onSettled: () => {
         queryClient.invalidateQueries({ queryKey: [noteListApi.baseKey] })
       },
   })

   const toggleNote = (id: string, done: boolean) => {

      updateNoteMutation.mutate({
         id,
         done: !done,
         AuthorId: "",
         Text: "",
         Title: "",
         Description: "",
         IsOpen: false,
         TagsNames: [],
         Files: []
      });

   }


   return {
      toggleNote,
   }
}  