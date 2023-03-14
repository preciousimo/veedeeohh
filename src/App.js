import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import PrivateRoute from './services/PrivateRoutes';
import { AuthProvider } from './context/AuthContext'; 

import Home from './pages/Home'
import LoginPage from './pages/Authenticate/LoginPage'
import SignupPage from './pages/Authenticate/SignupPage';  

function App() {
  return ( 
    <div className="App">
      <Router>
        <AuthProvider> 
          <Routes>   
            <Route element={<PrivateRoute/>}>
              <Route element={<Home />} path="/" exact/>
            </Route>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
          </Routes>
        </AuthProvider>
      </Router> 
    </div>
  );
}

export default App;