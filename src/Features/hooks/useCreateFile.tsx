import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsonApiInstance } from "../../Shared/api/api-instance";

export function useCreateFile() {
   const queryClient = useQueryClient();

   const createFileMutation = useMutation({
      mutationFn: async (data: {
         authorId: string;
         title: string;
         description: string;
         isOpen: boolean;
         mailsToAccess?: string[];
         tagsNames: string[];
         file: File;
      }) => {
         const formData = new FormData();
         formData.append("authorId", data.authorId);
         formData.append("title", data.title);
         formData.append("description", data.description);
         formData.append("isOpen", String(data.isOpen));

         if (data.mailsToAccess) {
            formData.append("mailsToAccess", data.mailsToAccess.join(','));
         }
         
         formData.append("tagsNames", data.tagsNames.join(','));
         formData.append("file", data.file);

         return jsonApiInstance(`/api/Document/SaveNewDocument`, {
            method: 'POST',
            body: formData,
         });
      },
      async onSettled() {
         await queryClient.invalidateQueries({ queryKey: ["myFiles"] });
      },
   })

   const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const authorId = String(formData.get('authorId') ?? ''); 
      const title = String(formData.get('title') ?? '');
      const description = String(formData.get('description') ?? '');
      const isOpen = formData.get('isOpen') === 'on';
      const mailsToAccess = String(formData.get('mailsToAccess')?? '').split(',').map(mail => mail.trim());
      const tagsNames = String(formData.get('tagsNames') ?? '').split(',').map(tag => tag.trim());
      const file = formData.get('file') as File;

      console.log("Form data:", {
         authorId,
         title,
         description,
         isOpen,
         mailsToAccess,
         tagsNames,
         file
      });

      createFileMutation.mutate({
         authorId,
         title,
         description,
         isOpen,
         mailsToAccess,
         tagsNames,
         file
      });
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createFileMutation.isPending
   }
}  