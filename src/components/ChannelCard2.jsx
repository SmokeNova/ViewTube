import { Link } from "react-router-dom";
import { Box, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";
import {demoChannelTitle } from '../utils/constants';
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail: { id, snippet, statistics } }) => {
    return (
        <Box sx={{ width: { xs: '98vw', md: '358px'} }}>
            <Link to={id && `/channel/${id}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia component="img" image={snippet?.thumbnails?.high?.url || demoProfilePicture} alt={snippet?.title} sx={{ width: { xs: '98vw', md: '200px' }, display: 'flex', height: '200px', borderRadius: '50%', mb: 3 }}></CardMedia>
                    <Typography fontWeight='bold' variant="subtitle2" sx={{ opacity: '0.4', color: 'white' }}>
                        <span>{snippet?.title || demoChannelTitle}</span>
                        <CheckCircle sx={{ fontSize: '16px', ml: 1, pt: '1px' }} />
                    </Typography>
                    <Typography fontWeight='bold' variant="subtitle2" sx={{ opacity: '0.4', color: 'white' }}>
                        {parseInt(statistics?.subscriberCount).toLocaleString()} subscribers
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard