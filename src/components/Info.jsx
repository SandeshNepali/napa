import React from "react";
import { Card, CardContent, Typography, Button, Avatar, Box } from "@mui/material";

const Info = () => {
    const cardData = [
        {
            avatarText: "J",
            title: "Apply to join",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
            buttonLabel: "Join Now"
        },
        {
            avatarText: "D",
            title: "Donate",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
            buttonLabel: "Donate"
        },
        {
            avatarText: "V",
            title: "Volunteer",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
            buttonLabel: "Get Involved"
        },
    ];

    // Common styling variables
    const avatarSize = 120;
    const cardMaxWidth = 350;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                width: '80%',
                mx: 'auto',
                my: 4,
            }}
        >
            {cardData.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: '1 1 300px',
                        maxWidth: cardMaxWidth,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'scale(1.05)' }
                    }}
                >
                    <Card
                        elevation={3}
                        sx={{
                            textAlign: 'center',
                            p: 3,
                            borderRadius: 4,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                            }
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: avatarSize,
                                        height: avatarSize,
                                        fontSize: '3rem',
                                        bgcolor: 'primary.main',
                                        color: 'common.white'
                                    }}
                                >
                                    {item.avatarText}
                                </Avatar>
                            </Box>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" sx={{ my: 2, px: 2, color: 'text.secondary' }}>
                                {item.description}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mb: 2, fontStyle: 'italic', color: 'secondary.main' }}>
                                "Together We'll Make A Change."
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 1,
                                    borderRadius: 8,
                                    px: 4,
                                    py: 1,
                                    textTransform: 'none',
                                    fontWeight: 'medium',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    '&:hover': {
                                        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                                    }
                                }}
                            >
                                {item.buttonLabel}
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default Info;
