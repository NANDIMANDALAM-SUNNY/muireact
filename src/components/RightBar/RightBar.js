import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Badge,
    Breadcrumbs

  } from "@mui/material";
  import React from "react";
  import { rightdata } from "../../data";
  
  const RightBar = () => {

    const itemData = [
      {
        id:1,
        src:"https://material-ui.com/static/images/image-list/breakfast.jpg",
        des:" This is a description of the image",


      },
      {
        id:2,
        src:"https://material-ui.com/static/images/image-list/breakfast.jpg",
        des:" This Is test description"
      },
      {
        id:3,
        src:"https://material-ui.com/static/images/image-list/breakfast.jpg",
        des:" This Is test description paragraph"
      },
    ]


    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed"  width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={17}>
          {
            rightdata.map((item) => {
              return (
                <>
                <Badge  color="primary" badgeContent={item.id}>
                  <Avatar src={item.src} alt={item.alt} />
                </Badge>
                </>
              )
            })
          } 
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Feed
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            itemData.map((item)=>{
              return (
                <>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.src} />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {item.des}
                    </React.Fragment>
                  }
                  />
        </ListItem>
            <Divider variant="inset" component="li" />

                </>
              )
            })
          }

      </List>
        </Box>
      </Box>
    );
  };
  
  export default RightBar;