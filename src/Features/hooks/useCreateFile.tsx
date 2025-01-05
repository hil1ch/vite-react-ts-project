import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fileListApi } from "../../Shared/api/api-file";

export function useCreateFile() {
   const queryClient = useQueryClient();

   const createFileMutation = useMutation({
      mutationFn: fileListApi.createFile,

      async onSettled() {
         await queryClient.invalidateQueries({ queryKey: [fileListApi.baseKey] });
      },
   })

   const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const AuthorId = localStorage.getItem('userId') ?? ''; 
      const Title = String(formData.get('title') ?? '');
      const Description = String(formData.get('description') ?? '');
      const IsOpen = formData.get('isOpen') === 'on';
      const MailsToAccess = String(formData.get('mailsToAccess')?? '').split(',').map(mail => mail.trim());
      const TagsNames = String(formData.get('tagsNames') ?? '').split(',').map(tag => tag.trim());
      const File = formData.get('file') as File;

      console.log("Form data:", {
         AuthorId,
         Title,
         Description,
         IsOpen,
         MailsToAccess,
         TagsNames,
         File
      });

      createFileMutation.mutate({
         AuthorId,
         Title,
         Description,
         IsOpen,
         MailsToAccess,
         TagsNames,
         File
      });
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createFileMutation.isPending
   }
}  