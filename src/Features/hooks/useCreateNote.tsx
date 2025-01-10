import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteListApi } from "../../Shared/api/api-note";

export function useCreateNote() {
   const queryClient = useQueryClient();

   const createNoteMutation = useMutation({
      mutationFn: noteListApi.createNote,

      async onSettled() {
         await queryClient.invalidateQueries({ queryKey: [noteListApi.baseKey] });
      },
   })

   const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const userId = localStorage.getItem('userEmail') ?? ''; 
      const title = String(formData.get('title') ?? '');
      const text = String(formData.get('text') ?? '');
      const tag = String(formData.get('tag') ?? '');
      const file = formData.get('file') as File;

      console.log("Form data:", {
         userId,
         title,
         text,
         tag,
         file
      });

      createNoteMutation.mutate({
         userId,
         title,
         text,
         tag,
         file
      });
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createNoteMutation.isPending
   }
}  