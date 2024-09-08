import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const SignUp = () => {
    return (
        <Box sx={{ backgroundColor: 'grey.100', py: 5 }}>
            <Box sx={{ maxWidth: 'md', mx: 'auto', p: 3, backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Sign Up
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                        variant="outlined"
                        label="Name"
                        required
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        required
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        required
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUp;
