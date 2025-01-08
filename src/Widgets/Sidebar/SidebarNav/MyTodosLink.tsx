import { NavLink } from "react-router-dom"
import './MyTodosLink.css'

function MyTodosLink() {
   return (
      <div className="sidebar__item">
         <img src="src\images\myTodos.svg" alt="" className="sidebar__img"></img>
         <NavLink className="sidebar__item-link" to="/myTodos">Мои задачи</NavLink>
      </div>
   )
}

export default MyTodosLink;