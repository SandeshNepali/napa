import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h2" color="error">
                    404
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Oops! Page not found.
                </Typography>
                <Typography variant="body1">
                    The page you’re looking for doesn’t exist or has been moved.
                </Typography>
            </Box>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >
                Go to Home
            </Button>
        </Container>
    );
}

export default Error;
