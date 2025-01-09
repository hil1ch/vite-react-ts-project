import MyTodos from './MyTodos/MyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import './MyTodosComponents.css';

function MyTodosComponents() {

  return (
    <div className="main">
      <div className="main__page-inner">
        <TodoForm />
        <MyTodos />
      </div>
    </div>
  );
}

export default MyTodosComponents;
