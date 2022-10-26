import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegisterBox from '../RegisterBox';
import SignInBox from '../SignInBox';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Stock28
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    typography: {
        fontFamily: [
            'Josefin Sans',
            'sans-serif'
        ].join(','),
    }
});

function LoginPage() {
    const [showRegister, setShowRegister] = useState(true);

    const handleClick = () => {
        setShowRegister(!showRegister);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#EEF1FF',
                backgroundSize: 'cover',
                borderRadius: 20,
                padding: 20,
                backgroundPosition: 'center',
            }}>
                <CssBaseline />
                {showRegister ? <RegisterBox handleClick={handleClick} /> :
                    <SignInBox handleClick={handleClick} />}
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}

export default LoginPage;