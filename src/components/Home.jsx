import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Profile from "../images/demo.png";

const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.default',
                textAlign: 'center',
                py: 6,
                px: 3
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Explore Our Highlights
            </Typography>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ width: '100%', maxWidth: '100%', borderRadius: '8px', overflow: 'hidden' }}
            >
                <SwiperSlide>
                    <Card sx={{ bgcolor: 'transparent', boxShadow: 'none', height: 'auto', maxWidth: '100%' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                            <img
                                src={Profile}
                                alt="Slide 1"
                                style={{
                                    width: '100%',
                                    maxWidth: '800px', // Adjust this value to control the maximum width of the image
                                    maxHeight: '500px', // Adjust this value to control the maximum height of the image
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'contain' // Use 'contain' to show the full image without cropping
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 2 }}>Slide 1 Title</Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Description for slide 1. This is an example of a beautiful slide with overlay text.
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card sx={{ bgcolor: 'transparent', boxShadow: 'none', height: 'auto', maxWidth: '100%' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                            <img
                                src={Profile}
                                alt="Slide 2"
                                style={{
                                    width: '100%',
                                    maxWidth: '800px', // Adjust this value to control the maximum width of the image
                                    maxHeight: '500px', // Adjust this value to control the maximum height of the image
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'contain' // Use 'contain' to show the full image without cropping
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 2 }}>Slide 2 Title</Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Description for slide 2. This is another example with different styling and content.
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card sx={{ bgcolor: 'transparent', boxShadow: 'none', height: 'auto', maxWidth: '100%' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                            <img
                                src={Profile}
                                alt="Slide 3"
                                style={{
                                    width: '100%',
                                    maxWidth: '800px', // Adjust this value to control the maximum width of the image
                                    maxHeight: '500px', // Adjust this value to control the maximum height of the image
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'contain' // Use 'contain' to show the full image without cropping
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 2 }}>Slide 3 Title</Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Description for slide 3. Here you can provide additional details or a call-to-action.
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default Home;
