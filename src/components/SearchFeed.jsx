import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Typography } from '@mui/material';
import { Videos } from './';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [videos])


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '96vh', background: "#000" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: 'white', m: 1.5 }}>
        Search Results for: <span style={{ color: 'red' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed