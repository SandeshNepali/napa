import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, Button, Avatar, Box, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function Nav() {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawerContents = (
        <Box
            sx={{
                width: 250,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <IconButton
                onClick={handleDrawerToggle}
                sx={{ alignSelf: 'flex-end', mb: 2 }}
            >
                <CloseIcon />
            </IconButton>
            <List sx={{ flexGrow: 1 }}>
                <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">Home</Typography>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/news"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">News</Typography>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/president"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">president</Typography>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/about"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">About</Typography>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/info"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">info</Typography>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5, borderRadius: 1 }}
                >
                    <Typography variant="body1">Contact</Typography>
                </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="caption" color="textSecondary">
                    NAPA - Nepalese American Pariyar Association
                </Typography>
            </Box>
        </Box>
    );


    return (
        <>
            <AppBar position="static" style={{ background: 'linear-gradient(to right, #00437b, #1598cb)' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 5 }}>
                        <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                style={{ width: 50, height: 50, marginRight: 16 }}
                            >
                                N
                            </Avatar>
                            NAPA - Nepalese American Pariyar Association
                        </Typography>
                    </Link>
                    <Button color="inherit" component={Link} to="/contact" style={{ marginLeft: 'auto' }}>
                        Sign In
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



