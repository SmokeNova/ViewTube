import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [details, setDetails] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setDetails(data.items[0]))

    fetchFromAPI(`search?part=snippet,id&type=video&relatedtoVideoId=${id}`)
      .then((data) => setVideos(data.items))

  }, [id])
  if (!details?.snippet) return "loading...";

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = details;

  return (
    <Stack sx={{ height: '93vh', background: '#000', flexDirection: { xs: 'column', md: 'row' }, pt: 1 }}>
      <Box sx={{ width: { xs: '98vw', md: '77vw' } }}>
        <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
        <Box sx={{ width: '100%', background: '#171717', pt: 4, height: '140px' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', pl: 1 }}>
            {title || demoVideoTitle}
          </Typography>
          <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', pr: 1, pl: 1 }}>
            <Typography variant="body1" fontWeight="bold" sx={{ color: 'white', mt: 1 }}>
              <Link to={`/channel/${channelId}`} style={{ fontWeight: 'bold', color: 'white' }}>
                {channelTitle || demoChannelTitle}
                <CheckCircle sx={{ opacity: '0.3', fontSize: '17px', ml: 0.5, mb: '-1px' }} />
              </Link>
            </Typography>
            <Stack direction="row" gap={2}>
              <Typography variant="subtitle1" sx={{ color: 'white', opacity: '0.5' }}>{parseInt(viewCount).toLocaleString()} views</Typography>
              <Typography variant="subtitle1" sx={{ color: 'white', opacity: '0.5' }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ height: '93vh', overflowY: 'auto' }}>
        <Videos videos={videos} direction="column" />
      </Box>
    </Stack>
  )
}

export default VideoPage