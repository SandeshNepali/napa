import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    List,
    ListItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    useTheme
} from "@mui/material";

const About = () => {
    const [data, setData] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const theme = useTheme();

    const members = [
        "Sandesh Nepali", "Kaji Sunam Darji", "Krishna Sonam", "Dimpal Pariyar", "Sapana Pariyar",
        "Laxmi Tikhatri", "Sagar Kumar Darnal", "Bishwanath Darnal", "Kajiman Siwa", "Binod Darji",
        "Sapna Pariyar", "Saraswati Pariyar", "Shanta Pariyar", "Shanti Sunam", "Shekhar Raj Mote",
        "Shristhi Shahi", "Siddhanta Pariyar", "Pradipta Pariyar", "Provin Pariyar", "Pushpa Damai",
        "Rabin Shiwa", "Raj Kapoor", "Raju Mothey", "Ram Sharan Pariyar", "Ramesh Razz Romiyo",
        "Rekha Pariyar", "Roji Karki Bagdas", "Rosna Pariyar", "S Ru Xinal", "Saa Nuu Nepali",
        "Sagar Darnal", "Samira Siwa", "Sammy Sanroji", "Sangita Hingmang", "Sanjayalal Sundas",
        "Santosh Lakher", "Santosh Nepali", "Kumar Darnal", "Laxmi Pariyar", "Laxmi Tikhatri",
        "Mameeta Santosh", "Manish Sunam", "Mina Vitrakoti", "Narayan Pariyar", "Narendra Pyasi",
        "Dilipkumar Nepali", "Om Adhikari", "Prakash Pariyar", "Pradeep Pariyar Thapa", "Nirmal Jairu",
        "Binod Shahi", "Bishnu Maya Pariyar", "Bishwanth Darnal", "Deepak Pariyar", "Dhruba Kumar Pariyar",
        "Dimple Pariyar", "Dipak Nepali", "Gautam Manisha", "Govind Ram Pariyar", "Indira Sunam Jay",
        "Kumar Pariyar", "Kaji Sunam", "Kamal Pariyar Babul", "Kanhaiya Singh Pariyar", "Karna Sunam Akela",
        "Kiran Pariyar"
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Determine current rows to display
    const paginatedMembers = members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box sx={{ width: '90%', maxWidth: 1200, mx: 'auto', my: 6, px: 2 }}>
            {/* About Us Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
                    NAPA is a non-profit community organization established in 2020 in the USA.
                    Our mission is to preserve Nepali identity by promoting cultural and social events,
                    foster closer contacts among Pariyar individuals, provide support to Nepalese in need,
                    and build cooperative relationships globally.
                </Typography>
            </Box>

            {/* Principal Activities Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Principal Activities
                </Typography>
                <List sx={{ pl: 2 }}>
                    <ListItem sx={{ mb: 1 }}>Promote cooperation among the Pariyar community in the USA.</ListItem>
                    <ListItem sx={{ mb: 1 }}>Preserve and promote Nepalese Pariyar identity and culture.</ListItem>
                    <ListItem sx={{ mb: 1 }}>Contribute to the well-being of Nepalese Pariyar communities in the USA and Nepal.</ListItem>
                    <ListItem>Promote social and charitable activities for the Pariyar communities.</ListItem>
                </List>
            </Box>

            {/* Members Section */}
            <Box>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Members of Nepalese-American Pariyar Association
                </Typography>

                {/* Executive Committee */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Executive Committee
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}><strong>President:</strong> Saroj Pariyar</Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}><strong>Vice President:</strong> Lal Bahadur Sundas</Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}><strong>General Secretary:</strong> Om Bahadur Adhikari</Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}><strong>Secretary:</strong> Surya Bahadur Sunam</Typography>
                        <Typography variant="body1"><strong>Treasurer:</strong> Bharat Pariyar</Typography>
                    </Box>
                </Box>

                {/* Advisory Board */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Advisory Board
                    </Typography>
                    <List sx={{ pl: 2 }}>
                        <ListItem sx={{ mb: 1 }}>Prem Pariyar</ListItem>
                        <ListItem sx={{ mb: 1 }}>Dr. Bishnu Maya Nepali</ListItem>
                        <ListItem sx={{ mb: 1 }}>Bhadraman Mote</ListItem>
                        <ListItem sx={{ mb: 1 }}>Mamita Nepali</ListItem>
                        <ListItem>Sushil Nepali</ListItem>
                    </List>
                </Box>

                {/* Technical Advisor */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Technical Advisor
                    </Typography>
                    <List sx={{ pl: 2 }}>
                        <ListItem sx={{ mb: 1 }}>Sandesh Nepali</ListItem>
                        <ListItem>Ram Krishna Pariyar</ListItem>
                    </List>
                </Box>

                {/* Board Members Table */}
                <Box>
                    <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Board Members
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Member Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedMembers.map((member, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{member}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={members.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
