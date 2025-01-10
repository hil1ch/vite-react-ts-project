import { useQuery } from '@tanstack/react-query';
import './MyTodos.css';
import PlaceholderTodoPageImage from '../../../Shared/UI/PlaceholderTodoPageImage/PlaceholderTodoPageImage';
import { ToastContainer } from 'react-toastify';
import { useDeleteTodo } from '../../../Features/hooks/useDeleteTodo';

interface MyTodo {
   id: string;
   text: string;
   done: boolean;
   userId: string | null;
}

const fetchMyTodos = async (token: string | null): Promise<MyTodo[]> => {
   const url = "https://39085646937f8a29.mokky.dev/myTodos";
 
   const response = await fetch(url, {
     headers: {
       Authorization: `Bearer ${token}` ,
     },
   });
   const result = await response.json();
 
   if (!response.ok) {
     throw new Error(result.message || "Something went wrong");
   }
 
   return result;
};

function MyTodos() {
   const token = localStorage.getItem('authToken');

   const {handleDelete, isPending} = useDeleteTodo();

   const {
      data = [],
      error,
      isLoading,
    } = useQuery<MyTodo[], Error>({
      queryKey: ['myTodos',],
      queryFn: () => fetchMyTodos(token),
    });
  
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
  
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }

   return (
      <div className="my__page-todos">
         <ToastContainer autoClose={2000}/>
         <div className="my__todos-title__inner">
            <h3 className="my__todos-title">Мои задачи</h3>
         </div>
         <p className="my__todos-description">Задачи, созданные мной</p>
         <div className="my__page-todos-list">
         {data.length > 0 ? (
            data.map(todo => (
               <div className="todo__item" key={todo.id}>
                  {todo.text}
                  <button className='delete__todo' onClick={() => handleDelete(todo.id)} disabled={isPending}>
                     <img src='src\images\delete.svg'></img>
                  </button>
               </div>
               
            ))
         ) : (
            <PlaceholderTodoPageImage />
         )}
         </div>
      </div>
   )
}

export default MyTodos;