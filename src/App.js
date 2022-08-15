import { Box, Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import  Navbar  from "./components/Navbar/Navbar";
import Sidebar  from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import RightBar from "./components/RightBar/RightBar";
import AddPosts from "./components/AddPosts/AddPosts";



function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar backcolor={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Content />
          <RightBar />
        </Stack>
        <AddPosts />
      </Box>
    </ThemeProvider>
  );
}

export default App;