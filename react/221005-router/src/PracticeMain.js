import { Link } from 'react-router-dom';
import './Practice.css';

function Main() {
    return (
        <div class="container">
            <Link to="/"><h2>ReactRouter 실습</h2></Link>
            
            <nav>
                <ul>
                    <li><Link to="/student/sesac">학생 SeSAC</Link></li>
                    <li><Link to="/student/codingon">코딩온</Link></li>
                    <li><Link to="/student/new?name=sesac&key=id#codingon">searchParams</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Main;