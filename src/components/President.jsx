import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

const President = () => {
    return (
        <Box
            sx={{
                width: '90%',
                mx: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                my: 6,
                alignItems: 'center'
            }}
        >
            {/* Message from the President Section */}
            <Box sx={{ flex: 1, textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 3 }}
                >
                    Message from the President
                </Typography>
                <Avatar
                    sx={{
                        width: { xs: 150, sm: 200, md: 250 },
                        height: { xs: 150, sm: 200, md: 250 },
                        fontSize: '5rem',
                        bgcolor: 'primary.main',
                        color: 'white',
                        mx: 'auto',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    A
                </Avatar>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                    Name: Sandesh Bardewa
                </Typography>
            </Box>

            {/* Introduction Section */}
            <Box sx={{ flex: 2, px: { xs: 2, md: 4 }, mt: { xs: 4, md: 0 }, textAlign: 'justify' }}>
                <Typography
                    variant="h5"
                    component="h1"
                    sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}
                >
                    Introduction
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                    culpa reprehenderit. Odio numquam voluptas explicabo incidunt quo
                    fugit et at ducimus. Porro nihil at cumque quaerat, perspiciatis
                    modi totam. Numquam, ipsam? Necessitatibus sint modi iure, libero
                    sit perspiciatis quod quis eaque rerum, aliquam aliquid!
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                    culpa reprehenderit. Odio numquam voluptas explicabo incidunt quo
                    fugit et at ducimus. Porro nihil at cumque quaerat, perspiciatis
                    modi totam. Numquam, ipsam? Necessitatibus sint modi iure, libero
                    sit perspiciatis quod quis eaque rerum, aliquam aliquid!{" "}
                    <Button
                        sx={{ textTransform: 'none', color: 'primary.main', p: 0, minWidth: 'auto', fontSize: 'inherit' }}
                    >
                        ...read more
                    </Button>
                </Typography>
            </Box>
        </Box>
    );
};

export default President;
