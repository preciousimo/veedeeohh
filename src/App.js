import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LoginPage from './pages/Authenticate/LoginPage' 

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path="" />
        <Route element={<LoginPage/>} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;