import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, Button, Avatar, Box, Divider, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function Nav() {
    const [open, setOpen] = useState(false);
    const theme = useTheme(); // Access theme for color consistency

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawerContents = (
        <Box
            sx={{
                width: 240,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                bgcolor: theme.palette.background.paper,
                boxShadow: 3,
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ alignSelf: 'flex-end', mb: 2, color: theme.palette.text.primary }}
                >
                    <CloseIcon />
                </IconButton>
                <List>
                    {['Home', 'News', 'President', 'About', 'Info', 'Contact'].map((text) => (
                        <ListItem
                            button
                            component={Link}
                            to={`/${text.toLowerCase()}`}
                            onClick={handleDrawerToggle}
                            key={text}
                            sx={{
                                py: 1.5,
                                borderRadius: 1,
                                mb: 1,
                                transition: 'background-color 0.3s, transform 0.2s',
                                '&:hover': {
                                    bgcolor: theme.palette.primary.light,
                                    transform: 'translateX(4px)',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                                }
                            }}
                        >
                            <Typography variant="body1">{text}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                <Divider sx={{ my: 2, bgcolor: theme.palette.divider }} />
                <Typography variant="caption" color="textSecondary">
                    NAPA - Nepalese American Pariyar Association
                </Typography>
            </Box>
        </Box>
    );


    return (
        <>
            <AppBar position="static" sx={{ bgcolor: theme.palette.primary.main, boxShadow: 1 }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                sx={{ width: 40, height: 40, mr: 2, bgcolor: theme.palette.secondary.main, color: 'white', fontSize: '1.25rem' }}
                            >
                                N
                            </Avatar>
                            NAPA - Nepalese American Pariyar Association
                        </Typography>
                    </Link>
                    <Button color="inherit" component={Link} to="/contact" sx={{ ml: 'auto', bgcolor: theme.palette.secondary.main, color: 'white', px: 2, py: 1, borderRadius: 1, '&:hover': { bgcolor: theme.palette.secondary.dark } }}>
                        Message
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
                {drawerContents}
            </Drawer>
        </>
    );
}

export default Nav;
