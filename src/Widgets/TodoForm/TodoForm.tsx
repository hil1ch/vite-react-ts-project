import { useCreateTodo } from "../../Features/hooks/useCreateTodo";
import './TodoForm.css';

export function TodoForm() {
   const {handleCreate, isPending} = useCreateTodo();

   return (
      <form className='form__todo' onSubmit={handleCreate}>
            <input className="text__todo" type='text' name='text' placeholder='Введите текст' required></input>
            <button disabled={isPending} className="btn__todo" type='submit'>Создать</button>
      </form>
   )
}