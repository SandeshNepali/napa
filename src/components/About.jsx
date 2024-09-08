import React, { useState } from "react";
import { Box, Typography, Button, List, ListItem, Divider } from "@mui/material";

const About = () => {
    const [data, setData] = useState(false);
    const toggleList = () => setData(!data);

    return (
        <Box sx={{ width: '85%', mx: 'auto', my: 4 }}>

            {/* About Us Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ textIndent: 2, mb: 4 }}>
                    NAPA is a non-profit community organization. It was formally
                    established in 2020 in the United States of America. Aiming to unify
                    scattered brothers and sisters together, it will work for community
                    upliftment. The mission of the organization shall be to preserve
                    Nepali identity by promoting Nepali cultural and social events
                    through the cooperation of Nepalese and American communities, to
                    foster closer contacts among Pariyar individuals, families, and
                    friends in the United States and in Nepal, to provide financial and
                    non-financial support to Nepalese in need, and to explore and build
                    a cooperative relationship for mutual benefits and advancement with
                    other world citizens and associations.
                </Typography>
            </Box>

            {/* Principal Activities Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline', mb: 2 }}>
                    Principal Activities
                </Typography>
                <List>
                    <ListItem>To promote close cooperation among Pariyar Community in the USA.</ListItem>
                    <ListItem>To preserve and promote Nepalese Pariyar identity and culture.</ListItem>
                    <ListItem>To contribute to the overall well-being of Nepalese Pariyar communities in the USA and Nepal.</ListItem>
                    <ListItem>To promote social and charitable activities to help Nepalese Pariyar communities in the USA and Nepal.</ListItem>
                </List>
            </Box>

            {/* Members Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' }, mb: 2 }}>
                    Members of Nepalese-American Pariyar Association
                </Typography>

                {/* Executive Committee */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        Executive Committee and Members
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1">
                            <strong>President:</strong> Saroj Pariyar
                        </Typography>
                        <Typography variant="body1">
                            <strong>Vice President:</strong> Lal Bahadur Sundas
                        </Typography>
                        <Typography variant="body1">
                            <strong>General Secretary:</strong> Om Bahadur Adhikari
                        </Typography>
                        <Typography variant="body1">
                            <strong>Secretary:</strong> Surya Bahadur Sunam
                        </Typography>
                        <Typography variant="body1">
                            <strong>Treasurer:</strong> Bharat Pariyar
                        </Typography>
                    </Box>
                </Box>

                {/* Advisory Board */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        Advisory Board
                    </Typography>
                    <List>
                        <ListItem>Prem Pariyar</ListItem>
                        <ListItem>Dr. Bishnu Maya Nepali</ListItem>
                        <ListItem>Bhadraman Mote</ListItem>
                        <ListItem>Mamita Nepali</ListItem>
                        <ListItem>Dilip Nepali</ListItem>
                    </List>
                </Box>

                {/* Technical Advisor */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        Technical Advisor
                    </Typography>
                    <List>
                        <ListItem>Sandesh Nepali</ListItem>
                        <ListItem>Ram Krishna Pariyar</ListItem>
                    </List>
                </Box>

                {/* Board Members */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        Board Members
                    </Typography>
                    <List>
                        <ListItem>Sandesh Nepali</ListItem>
                        <ListItem>Kaji Sunam Darji</ListItem>
                        <ListItem>Krishna Sonam</ListItem>
                        <ListItem>Dimpal Pariyar</ListItem>
                        <ListItem>Sapana Pariyar</ListItem>
                        <ListItem>Laxmi Tikhatri</ListItem>
                        <ListItem>Sagar Kumar Darnal</ListItem>
                        <ListItem>Bishwanath Darnal</ListItem>
                        <ListItem>Kajiman Siwa</ListItem>
                        <ListItem>Binod Darji</ListItem>
                    </List>
                    {/* Toggle List */}
                    <Button
                        onClick={toggleList}
                        sx={{ mt: 2, bgcolor: 'grey.500', color: 'blue.200', '&:hover': { bgcolor: 'grey.600' } }}
                    >
                        {data ? "Hide Members" : "View the List of All Members Below"}
                    </Button>
                    {/* Detailed List */}
                    <List sx={{ display: data ? 'block' : 'none', mt: 2 }}>
                        <ListItem>Sapna Pariyar</ListItem>
                        <ListItem>Saraswati Pariyar</ListItem>
                        <ListItem>Shanta Pariyar</ListItem>
                        <ListItem>Shanti Sunam</ListItem>
                        <ListItem>Shekhar Raj Mote</ListItem>
                        <ListItem>Shristhi Shahi</ListItem>
                        <ListItem>Siddhanta Pariyar</ListItem>
                        <ListItem>Pradipta Pariyar</ListItem>
                        <ListItem>Provin Pariyar</ListItem>
                        <ListItem>Pushpa Damai</ListItem>
                        <ListItem>Rabin Shiwa</ListItem>
                        <ListItem>Raj Kapoor</ListItem>
                        <ListItem>Raju Mothey</ListItem>
                        <ListItem>Ram Sharan Pariyar</ListItem>
                        <ListItem>Ramesh Razz Romiyo</ListItem>
                        <ListItem>Rekha Pariyar</ListItem>
                        <ListItem>Roji Karki Bagdas</ListItem>
                        <ListItem>Rosna Pariyar</ListItem>
                        <ListItem>S Ru Xinal</ListItem>
                        <ListItem>Saa Nuu Nepali</ListItem>
                        <ListItem>Sagar Darnal</ListItem>
                        <ListItem>Samira Siwa</ListItem>
                        <ListItem>Sammy Sanroji</ListItem>
                        <ListItem>Sangita Hingmang</ListItem>
                        <ListItem>Sanjayalal Sundas</ListItem>
                        <ListItem>Santosh Lakher</ListItem>
                        <ListItem>Santosh Nepali</ListItem>
                        <ListItem>Kumar Darnal</ListItem>
                        <ListItem>Laxmi Pariyar</ListItem>
                        <ListItem>Laxmi Tikhatri</ListItem>
                        <ListItem>Mameeta Santosh</ListItem>
                        <ListItem>Manish Sunam</ListItem>
                        <ListItem>Mina Vitrakoti</ListItem>
                        <ListItem>Narayan Pariyar</ListItem>
                        <ListItem>Narendra Pyasi</ListItem>
                        <ListItem>Dilipkumar Nepali</ListItem>
                        <ListItem>Om Adhikari</ListItem>
                        <ListItem>Prakash Pariyar</ListItem>
                        <ListItem>Pradeep Pariyar Thapa</ListItem>
                        <ListItem>Nirmal Jairu</ListItem>
                        <ListItem>Binod Shahi</ListItem>
                        <ListItem>Bishnu Maya Pariyar</ListItem>
                        <ListItem>Bishwanth Darnal</ListItem>
                        <ListItem>Deepak Pariyar</ListItem>
                        <ListItem>Dhruba Kumar Pariyar</ListItem>
                        <ListItem>Dimple Pariyar</ListItem>
                        <ListItem>Dipak Nepali</ListItem>
                        <ListItem>Gautam Manisha</ListItem>
                        <ListItem>Govind Ram Pariyar</ListItem>
                        <ListItem>Indira Sunam Jay</ListItem>
                        <ListItem>Kumar Pariyar</ListItem>
                        <ListItem>Kaji Sunam</ListItem>
                        <ListItem>Kamal Pariyar Babul</ListItem>
                        <ListItem>Kanhaiya Singh Pariyar</ListItem>
                        <ListItem>Karna Sunam Akela</ListItem>
                        <ListItem>Kiran Pariyar</ListItem>
                    </List>
                </Box>
            </Box>
        </Box>

    );
};

export default About;
