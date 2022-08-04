import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import TaskApp from './pages/TaskApp';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} exact/>
          <Route path='/taskapp' element={<TaskApp />} exact/>
          <Route path='/profile' element={<Profile />} exact/>
          <Route path='/signin' element={<SignIn />} exact/>
          <Route path='/signup' element={<SignUp />} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
