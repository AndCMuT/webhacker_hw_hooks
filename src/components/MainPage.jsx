import './MainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="mainPage">
            <ul>
                <li><Link to="/ClickCounter" className='tasksLink'>Click counter</Link></li>
                <li><Link to="/CountDownTimer" className='tasksLink'>Count down timer</Link></li>
                <li><Link to="/LoginForm" className='tasksLink'>Login form</Link></li>
            </ul>
        </div>
    )
}

export default MainPage