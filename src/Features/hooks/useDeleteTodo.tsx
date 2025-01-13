import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoListApi } from "../../Shared/api/api-todo";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation({
    mutationFn: todoListApi.deleteTodo,
    async onSettled() {
      queryClient.invalidateQueries({
        queryKey: [todoListApi.baseKey],
      });
    },

    async onSuccess(_, deletedId) {
      queryClient.setQueryData(
        todoListApi.getTodoListQueryOptions().queryKey,
        todos => todos?.filter((item) => item.id !== deletedId)
      );
    },
  });

  return {
    handleDelete: deleteTodoMutation.mutate,
    isPending: deleteTodoMutation.isPending,
  };
}
