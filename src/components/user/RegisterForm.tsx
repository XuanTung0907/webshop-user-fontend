import {useForm} from "react-hook-form";
import {Box, Button, TextField,} from '@mui/material';

interface FormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
            <TextField
                margin="normal"
                fullWidth
                label="Tên"
                {...register("name", {
                    required: "Họ tên là bắt buộc",
                    minLength: {
                        value: 2,
                        message: "Họ tên phải có ít nhất 2 ký tự"
                    }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
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

            <TextField
                margin="normal"
                fullWidth
                label="Xác nhận mật khẩu"
                type="password"
                {...register("confirmPassword", {
                    required: "Vui lòng xác nhận mật khẩu",
                    validate: (value) =>
                        value === watch("password") || "Mật khẩu không khớp"
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Đăng ký
            </Button>
        </Box>
    );
};

export default RegisterForm;