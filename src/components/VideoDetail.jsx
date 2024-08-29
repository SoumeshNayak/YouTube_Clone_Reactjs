import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from './Videos'
import { fetchFromApi } from "../utils/fetchFromApi";
const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null);
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&Id=${id}&type=video`).then((data)=>setVideoDetail(data.items))
  },[])
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            </Box>
        </Box>
      </Stack>
    </Box>
    
  )
}

export default VideoDetail