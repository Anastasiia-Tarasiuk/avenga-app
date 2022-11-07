import './App.css';
import { Routes, Route } from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { PublicPage } from './components/PublicPage';
import { PrivatePage } from './components/PrivatePage';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="main" element={
        <PrivateRoute>
          <PrivatePage />
        </PrivateRoute>} />
      <Route path="*" element={<NotFound />} />      
    </Routes>
    </>
}

export default App;