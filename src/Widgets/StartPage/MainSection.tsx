import { Link } from 'react-router-dom';
import './MainSection.css';

function MainSection() {
   return (
      <div className="container">
         <div className="main__section">
            <h1 className="section__title">Легко записывай <span>Умно используй</span></h1>
            <p className="section__subtitle">Записывайте идеи и делайте их реальностью с помощью интеллектуальной системы заметок, которая подстраивается под ваши нужды.</p>
            <Link className="section__link" to="/login">Начать работу</Link>
         </div>
      </div>
)}

export default MainSection;