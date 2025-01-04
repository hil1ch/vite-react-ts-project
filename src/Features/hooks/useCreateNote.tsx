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

      const AuthorId = String(formData.get('authorId') ?? ''); 
      const Title = String(formData.get('title') ?? '');
      const Text = String(formData.get('text') ?? '');
      const Description = String(formData.get('description') ?? '');
      const IsOpen = formData.get('isOpen') === 'on';
      const TagsNames = String(formData.get('tagsNames') ?? '').split(',').map(tag => tag.trim());
      const Files = formData.getAll('files') as File[];

      console.log("Form data:", {
         AuthorId,
         Title,
         Text,
         Description,
         IsOpen,
         TagsNames,
         Files
      });

      createNoteMutation.mutate({
         AuthorId,
         Title,
         Text,
         Description,
         IsOpen,
         TagsNames,
         Files
      });
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createNoteMutation.isPending
   }
}  