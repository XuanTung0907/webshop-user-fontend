import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import AuthButtons from './components/auth/AuthButtons';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthButtons />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;