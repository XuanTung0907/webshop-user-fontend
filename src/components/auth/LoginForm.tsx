import React from 'react';
import { useForm } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Toolbar,
} from '@mui/material';

interface FormInputs {
    email: string;
    password: string;
}

interface LoginFormProps {
    onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data);
        onClose();
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar/>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6" gutterBottom>
                                Đăng nhập
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Email"
                                    {...register("email", {
                                        required: "Email là bắt buộc",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email không hợp lệ"
                                        }
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Mật khẩu"
                                    type="password"
                                    {...register("password", {
                                        required: "Mật khẩu là bắt buộc",
                                        minLength: {
                                            value: 6,
                                            message: "Mật khẩu phải có ít nhất 6 ký tự"
                                        }
                                    })}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Đăng nhập
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LoginForm;