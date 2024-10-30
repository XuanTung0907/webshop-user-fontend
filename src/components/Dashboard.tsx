import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Typography,
    useTheme,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Menu as MenuIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
} from '@mui/icons-material';
import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';


interface DashboardProps {
    onLoginClick: () => void; // onLoginClick là một hàm không nhận tham số và không trả về giá trị
}

const drawerWidth = 240;

const Dashboard: React.FC<DashboardProps> = ({ onLoginClick }) => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openLogin, setOpenLogin] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        ...(!open && {
                            width: theme.spacing(7),
                            overflowX: 'hidden'
                        })
                    },
                }}
                open={open}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                        <ListItemButton onClick={onLoginClick}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Login"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </List>
                    <Divider/>
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar/>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Main content */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" gutterBottom>
                                    User Registration
                                </Typography>
                                <RegisterForm/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Dialog open={openLogin} onClose={handleCloseLogin}>
                <DialogTitle>Đăng nhập</DialogTitle>
                <DialogContent>
                    <LoginForm onClose={handleCloseLogin} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLogin} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Dashboard;