import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import ClickCounter from './components/ClickCounter';
import CountDownTimer from './components/CountDownTimer';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';

function App() {

  return (
    <>
    <Router>
      <Header />
      
      <div className="routes">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='ClickCounter' element={<ClickCounter />} />
          <Route path='CountDownTimer' element={<CountDownTimer />} />
          <Route path='LoginForm' element={<LoginForm />} />
          <Route path='UserProfile' element={ <UserProfile /> } />
        </Routes>
      </div>
      
      <Footer />
    

    </Router>
    </>
  )
}

export default App
