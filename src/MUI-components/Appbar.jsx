
import {
  Toolbar,
  AppBar,
  
  Typography,
  Box,
} from "@mui/material";
import Marquee from "react-fast-marquee";




const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    
    <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar 
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          >
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                AL-Zubara
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>

          {/* <Drawerr drawerWidth ={drawerWidth} setmyMOde={setmyMOde}/> */}

          {/* Hero Section */}
          <Box
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
            id="hero"
          >
            <Box
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }}
            >
              <Typography className="heroText" variant="h4">
                .Hello, and welcome ❕

              and Hiiiiiiiiiiiiiiii
              </Typography>
              <br />
              <br />
              <br />

              <Typography className="heroTextAra" variant="h4">
                !!هلا ومرحبا ... حياكم
              </Typography>
            </Box>

            <div className="marquar">
              <Marquee direction="up">
                <Typography className="heromarq" variant="h4">
                  معا ... نعيش تفاصيل الماضي 👈🏻 في الحاضر
                </Typography>
                <Typography className="heromarq" variant="h4">
                let's live the past, in 👉🏻 the present.
                </Typography>
              </Marquee>
            </div>
          </Box>

          
        
          
        </Box>

        
      </div>
  );
};

export default Appbar;
