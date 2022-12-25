import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoPage, ChannelPage, SearchFeed } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Box background="#000">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoPage />} />
                    <Route path="/channel/:id" element={<ChannelPage />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App
