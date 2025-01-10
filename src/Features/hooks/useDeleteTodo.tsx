import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoListApi } from "../../Shared/api/api-todo";
import { toast } from "react-toastify";

export function useDeleteTodo() {
   const queryClient = useQueryClient();

   const deleteTodoMutation = useMutation({
      mutationFn: todoListApi.deleteTodo,
      async onSettled() {
         queryClient.invalidateQueries({
            queryKey: [todoListApi.baseKey],
         })
         toast.success("Задача успешно удалена");
      },

      async onSuccess(_, deletedId) {
         const todos = queryClient.getQueryData(todoListApi.getTodoListQueryOptions().queryKey);

         if (todos) {
            queryClient.setQueryData(todoListApi.getTodoListQueryOptions().queryKey, todos.filter((item) => item.id !== deletedId));
         }

         
      }
   })

   return {
      handleDelete: deleteTodoMutation.mutate,
      isPending: deleteTodoMutation.isPending
   }
}