import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsonApiInstance } from "../../Shared/api/api-instance";

export function useCreateNote() {
   const queryClient = useQueryClient();

   const createNoteMutation = useMutation({
      mutationFn: async (data: {
         authorId: string;
         title: string;
         text: string;
         description: string;
         isOpen: boolean;
         tagsNames: string[];
         files?: File[];
      }) => {
         const formData = new FormData();
         formData.append("authorId", data.authorId);
         formData.append("title", data.title);
         formData.append("text", data.text);
         formData.append("isOpen", String(data.isOpen));
         formData.append("tags", data.tagsNames.join(','));

         // Добавляем файлы, если они есть
         if (data.files) {
            data.files.forEach(file => {
               formData.append("file", file);
            });
         }

         return jsonApiInstance(`/api/Note/CreateNote`, {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
         });
      },
      async onSettled() {
         await queryClient.invalidateQueries({ queryKey: ["myNotes"] });
      },
   })

   const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const authorId = String(formData.get('authorId') ?? ''); 
      const title = String(formData.get('title') ?? '');
      const text = String(formData.get('text') ?? '');
      const description = String(formData.get('description') ?? '');
      const isOpen = formData.get('isOpen') === 'on';
      const tagsNames = String(formData.get('tags') ?? '').split(',').map(tag => tag.trim());
      const files = formData.getAll('file') as File[];

      console.log("Form data:", {
         authorId,
         title,
         text,
         description,
         isOpen,
         tagsNames,
         files
      });

      createNoteMutation.mutate({
         authorId,
         title,
         text,
         description,
         isOpen,
         tagsNames,
         files
      });
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createNoteMutation.isPending
   }
}  