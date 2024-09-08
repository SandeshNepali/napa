import React from "react";
import { Card, CardContent, Typography, Button, Avatar, Box } from "@mui/material";

const Info = () => {
    const cardData = [
        {
            avatarText: "J", // Example text for the avatar
            title: "Apply to join",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
        },
        {
            avatarText: "D", // Example text for the avatar
            title: "Donate",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
        },
        {
            avatarText: "V", // Example text for the avatar
            title: "Volunteer",
            description: "NAPA is a Non-Profit Community Organization. Formally established in 2020 in the United States of America, it aims to unify scattered brothers and sisters together and work for community upliftment.",
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                width: '80%',
                mx: 'auto',
                my: 3
            }}
        >
            {cardData.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: '1 1 300px', // Flex-grow, flex-shrink, flex-basis
                        maxWidth: 350,
                        textAlign: 'center'
                    }}
                >
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Avatar
                                    sx={{ width: 120, height: 120, fontSize: '3rem' }}
                                >
                                    {item.avatarText}
                                </Avatar>
                            </Box>
                            <Typography variant="h6" component="h2" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ my: 2, px: 2 }}>
                                {item.description}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                "Together We'll Make A Change."
                            </Typography>
                            <Button
                                variant="text"
                                sx={{
                                    fontWeight: 'light',
                                    '&:hover': { fontWeight: 'medium' }
                                }}
                            >
                                + Learn more
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default Info;
