import React from 'react';
import { Container, Grid, Typography, TextField, Button, Paper, Box, Divider } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for proper rendering

const center = [37.7749, -122.4194]; // Replace with your latitude and longitude

const ContactPage = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ marginBottom: '1.5rem' }}>
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} sx={{ padding: '2rem', borderRadius: '12px', boxShadow: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            We'd Love to Hear From You
                        </Typography>
                        <Divider sx={{ marginBottom: '1rem' }} />
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                required
                                type="email"
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                margin="normal"
                                required
                                sx={{ marginBottom: '1rem' }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                rows={4}
                                sx={{ marginBottom: '1rem' }}
                            />
                            <Box textAlign="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    endIcon={<SendIcon />}
                                    sx={{ borderRadius: '20px' }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} sx={{ padding: '2rem', borderRadius: '12px', boxShadow: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Our Location
                        </Typography>
                        <Divider sx={{ marginBottom: '1rem' }} />
                        <MapContainer
                            center={center}
                            zoom={12}
                            style={{ height: '400px', width: '100%' }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='© OpenStreetMap contributors'
                            />
                            <Marker position={center}>
                                <Popup>
                                    Our office is located here.
                                </Popup>
                            </Marker>
                        </MapContainer>
                        <Box sx={{ marginTop: '1rem' }}>
                            <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
                                123 Main Street
                                <br />
                                Suite 400
                                <br />
                                Anytown, USA 12345
                            </Typography>
                            <Typography variant="body1">
                                Phone: (123) 456-7890
                                <br />
                                Email: contact@yourcompany.com
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPage;
