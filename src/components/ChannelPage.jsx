import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Videos, ChannelCard2 } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelPage = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`)
      .then((data) => setVideos(data.items))
  }, [videos])

  if (!channelDetail) return "loading...";


  return (
    <Stack direction="column" sx={{ background: '#000', gap: 1, alignItems: 'center' }}>
      <Box sx={{ width: '100vw', height: '32vh', background: 'linear-gradient(90deg, rgba(179,17,232,1) 0%, rgba(9,47,121,1) 53%, rgba(0,228,255,1) 100%)' }} />
      <Box sx={{ mt: '-100px' }}>
        <ChannelCard2 channelDetail={channelDetail} />
      </Box>
      <Videos videos={videos} />
    </Stack>
  )
}

export default ChannelPage