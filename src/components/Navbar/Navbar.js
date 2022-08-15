import { Mail, Notifications, Pets } from "@mui/icons-material";
import React,{useState} from 'react'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    ListItem,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
    ListItemIcon,
    Stack,
  } from "@mui/material";
  import HomeIcon from '@mui/icons-material/Home';
  import LiveTvIcon from '@mui/icons-material/LiveTv';
  import StoreIcon from '@mui/icons-material/Store';
  import PeopleIcon from '@mui/icons-material/People';
  import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
  import MessageIcon from '@mui/icons-material/Message';
  import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
  import AppsIcon from '@mui/icons-material/Apps';



  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const IconsMenu = styled("div")(({ theme }) => ({
    padding: "0 10px",
    width: "40%",
    
  }));

  const Search= styled(Box)({
    width: "20%",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  })

const Icons = styled(Box)(({ theme }) => ({
    // display: "none",
    // alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    // justifyContent: "row",
  }));
  
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
const Navbar = ({backcolor}) => {
    const [open, setOpen] = useState(false);
  return (
    <>

            <AppBar position='sticky'  sx={{backgroundColor:`${backcolor=='light'?'white':null}`}}>
            <StyledToolbar>
            <Search>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } ,color:'black'}}>
               SUNNY
                </Typography>
                
                <InputBase sx={{borderRadius:'5px',padding:'5px',backgroundColor:'#bdbdbd',color:'black'}} placeholder="Search…"  />
            </Search>
              
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
            <IconsMenu  >
                    <Stack direction="row" spacing={2} justifyContent="space-around">
                    <ListItem >
                          <ListItemIcon><HomeIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem >
                        <ListItemIcon><LiveTvIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem>
                              <ListItemIcon><StoreIcon /></ListItemIcon>
                          </ListItem>
                    <ListItem >
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem >
                        <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
                    </ListItem>
                    </Stack>
           </IconsMenu>

           <Stack justifyContent= 'flex-end'>
            <Icons>
                    <ListItemIcon><MessageIcon /></ListItemIcon>
                    <ListItemIcon><NotificationsActiveIcon /></ListItemIcon>
                    <ListItemIcon><AppsIcon /></ListItemIcon>
                    <ListItemIcon onClick={(e) => setOpen(true)}><Avatar sx={{ width: 30, height: 30 }} src="https://scontent.fvga2-1.fna.fbcdn.net/v/t39.30808-1/259774221_659331088393109_5389928357319049899_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=WSUZcJBcrMUAX9vaBmX&_nc_ht=scontent.fvga2-1.fna&oh=00_AT9QM5-hgtwMOLF-5k-IrBHm7h9foPky3g-0Hi0AVgn4IQ&oe=62FEBDCE"/></ListItemIcon>
                 <ListItem> 
            </ListItem>  
            </Icons>        
           </Stack>
      </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
            </AppBar>
      
    </>
  )
}

export default Navbar