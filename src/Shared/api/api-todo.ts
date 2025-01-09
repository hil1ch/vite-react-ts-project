import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";

export type TodoDto = {
   id?: string;
   text: string;
   done: boolean;
   userId: string | null;
}

export const todoListApi = {
   baseKey: 'myTodos',

   getTodoListQueryOptions: () => {
      return queryOptions({
         queryKey: [todoListApi.baseKey, "list"], 
         queryFn: (meta) => jsonApiInstance<TodoDto[]>(`/myTodos`, {signal: meta.signal}),
      });
   },

   createTodo: (data: TodoDto) => {
      return jsonApiInstance<TodoDto>(`/myTodos`, {
         method: 'POST',
         json: data
      })
   },

   deleteTodo: (id: string) => {
      return jsonApiInstance(`/myTodos/${id}`, {
        method: "DELETE"
      });
   },

   updateTodo: (data: Partial<TodoDto> & {id: string}) => {
      return jsonApiInstance<TodoDto>(`/myTodos/${data.id}`, {
         method: 'PATCH',
         json: data
      })
   },
}