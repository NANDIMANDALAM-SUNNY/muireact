import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Content = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
        <>
        {/* <CuroselShow /> */}
        <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
    </Box>
  );
};

export default Content;