import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoListApi } from "../../Shared/api/api-todo";
import { toast } from "react-toastify";

export function useCreateTodo() {
   const queryClient = useQueryClient();

   const createTodoMutation = useMutation({
      mutationFn: todoListApi.createTodo,
      async onSuccess() {
         await queryClient.invalidateQueries({
            queryKey: [todoListApi.baseKey],
         })
         toast.success("Задача успешно создана");
      }
   })
   
   const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
   
      const text = String(formData.get('text') ?? '');
   
      createTodoMutation.mutate({
         text: text,
         done: false,
         userId: localStorage.getItem('userEmail'),
      })
   
      e.currentTarget.reset();
   }

   return {
      handleCreate,
      isPending: createTodoMutation.isPending
   }
}