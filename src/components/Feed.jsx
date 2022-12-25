import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])


  return (
    <Stack direction="column" sx={{ background: '#000', minHeight: '94vh', flexDirection: { md: 'row' } }}>
      <Box sx={{ borderRight: '1px solid #181a1a' }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' sx={{ color: 'white', p: 1 }}>Copyright &copy; ViewTube</Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '96vh' }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: 'white', m: 1.5 }}>
          <span style={{ color: 'red' }}>{selectedCategory}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed