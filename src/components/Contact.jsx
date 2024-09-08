import React from 'react';
import SignUp from './SignUp';
import { Box, Typography, Button, TextField, Grid, List, ListItem } from '@mui/material';

const Contact = () => {
    return (
        <>
            <SignUp />
            <Box sx={{ backgroundColor: 'grey.200', py: 5 }}>
                <Box sx={{ p: 5, backgroundColor: 'grey.800', color: 'grey.200' }}>
                    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                        <Grid container spacing={2}>
                            {/* NAPA Association Section */}
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant="h5" component="h4" sx={{ pb: 2 }}>
                                    NAPA Association
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Box component="span" display="block" mb={1}>Berkeley</Box>
                                    <Box component="span" display="block" mb={1}>California, 94704</Box>
                                    <Box component="span" display="block" mb={1}><strong>Technical Support:</strong> sandeshnepali57@gmail.com</Box>
                                    <Box component="span" display="block" mb={1}><strong>Email:</strong> napafamily2020@gmail.com</Box>
                                </Typography>
                            </Grid>

                            {/* Useful Links Section */}
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant="h5" component="h4" sx={{ pb: 2 }}>
                                    Useful Links
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>About Us</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Service</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Terms of Services</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Typography>
                                    </ListItem>
                                </List>
                            </Grid>

                            {/* Our Services Section */}
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant="h5" component="h4" sx={{ pb: 2 }}>
                                    Our Services
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>About Us</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Service</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Terms of Services</Typography>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Typography>
                                    </ListItem>
                                </List>
                            </Grid>

                            {/* Stay Connected Section */}
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant="h5" component="h4" sx={{ pb: 2 }}>
                                    Stay Connected with Us
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ pb: 2, mb: 3 }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, dolor.
                                </Typography>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Enter your email address"
                                        sx={{ flex: '1 1 66%', mr: 1, mb: 2, backgroundColor: 'white' }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{ flex: '1 1 33%', mb: 2 }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
