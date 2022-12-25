import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '98vw', md: '358px'}, boxShadow: 'none', border: 0, flex: 2  }}>
            <Link to={videoId ? `/video/${videoId}` : snippet?.title}>
                <CardMedia component="img" src={snippet?.thumbnails?.high?.url} sx={{ width: { xs: '100%', md: '358px' }, height: '180px' }} alt={demoThumbnailUrl}></CardMedia>
            </Link>
            <CardContent sx={{ height: '106px', background: '#171717' }}>
                <Link to={videoId ? `/video/${videoId}` : snippet?.title}>
                    <Typography fontWeight='bold' variant="subtitle1" sx={{ color: 'white', mb: 1.5 }}>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 40)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : snippet?.title}>
                    <Typography fontWeight='bold' variant="subtitle2" sx={{ opacity: '0.4', color: 'white' }}>
                        <span>{snippet?.channelTitle || demoChannelTitle}</span>
                        <CheckCircle sx={{ fontSize: '16px', ml: 1, pt: '1px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard