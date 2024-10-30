import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/Dashboard';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function App() {
    const [openLogin, setOpenLogin] = useState(false);

    const handleClickOpen = () => {
        setOpenLogin(true);
    };

    const handleClose = () => {
        setOpenLogin(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard onLoginClick={handleClickOpen} />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>

            <Dialog open={openLogin} onClose={handleClose}>
                <DialogTitle>Đăng nhập</DialogTitle>
                <DialogContent>
                    <LoginForm onClose={handleClose} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </BrowserRouter>
    );
}

export default App;