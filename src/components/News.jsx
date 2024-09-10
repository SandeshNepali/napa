import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";

const News = () => {
    const topHeadlines = [
        {
            avatarText: "C",
            title: "California University Adds Caste To Non-Discrimination Policy",
            link: "https://www.youtube.com/watch?v=IhlvsD6KqFs",
        },
        {
            avatarText: "S",
            title: "Cal State System Adds Caste To Anti-Discrimination Policy In Groundbreaking Decision",
            link: "https://www.latimes.com/california/story/2022-01-20/csu-adds-caste-to-its-anti-discrimination-policy",
        },
        {
            avatarText: "H",
            title: "'Hidden Discrimination': California University Joins National Trend To Protect Against Caste Bias On Campus",
            link: "https://www.wgbh.org/news/education/2022/03/14/hidden-discrimination-california-university-joins-national-trend-to-protect-against-caste-bias-on-campus",
        },
        {
            avatarText: "C",
            title: "Colleges And Universities Across The US Are Moving To Ban Caste Discrimination",
            link: "https://edition.cnn.com/2022/01/30/us/csu-caste-protections-universities-cec/index.html",
        },
        {
            avatarText: "T",
            title: "Caste In California: Tech Giants Confront Ancient Indian Hierarchy",
            link: "https://www.reuters.com/business/sustainable-business/caste-california-tech-giants-confront-ancient-indian-hierarchy-2022-08-15/",
        },
    ];

    return (
        <Box sx={{ width: '90%', mx: 'auto', my: 6 }}>
            {/* Breaking News Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                    Breaking News
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Avatar
                        sx={{
                            width: 300,
                            height: 200,
                            mr: { md: 3 },
                            mb: { xs: 3, md: 0 },
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            borderRadius: 2,
                        }}
                        src="https://association-webpage.sajannepali.repl.co/images/news1.webp"
                        alt="Breaking News"
                    />
                    <Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                            <a
                                href="https://www.npr.org/2020/10/12/922936053/california-workplace-discrimination-system-sheds-light-on-caste-system"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: '#1976d2' }}
                            >
                                California Workplace Discrimination System Sheds Light On Caste System
                            </a>
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                            This summer, a tech worker filed a workplace discrimination lawsuit in California. The remarkable thing is that the lawsuit isn't about sexual{" "}
                            <a
                                href="https://www.npr.org/2020/10/12/922936053/california-workplace-discrimination-system-sheds-light-on-caste-system"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'underline', color: '#1976d2' }}
                            >
                                ...read more
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Divider variant="middle" sx={{ my: 6 }} />

            {/* Top Headlines Section */}
            <Box>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                    Top Headlines
                </Typography>
                <Box sx={{ maxHeight: 500, overflowY: 'auto' }}>
                    {topHeadlines.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 3,
                                p: 2,
                                border: '1px solid #ddd',
                                borderRadius: 2,
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mr: 2,
                                    fontSize: '2rem',
                                    bgcolor: '#1976d2',
                                    color: '#fff',
                                }}
                            >
                                {item.avatarText}
                            </Avatar>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: '1.5' }}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: '#1976d2' }}
                                >
                                    {item.title}
                                </a>
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default News;
