import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import Home from './pages/Home'
import LoginPage from './pages/Authenticate/LoginPage'
import SignupPage from './pages/Authenticate/SignupPage';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignupPage />} path="/signup" />
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;