import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import getDesignTokens from "styles/MyTheme";
// @ts-ignore
import Footer from "MUI-components/Footer";
import { cyan, deepPurple } from "@mui/material/colors";
// @ts-ignore
// import Gallery from "./gallery/Gallery";
// import Gallerry from "pages/gallery/ReactImageGallery";


const drawerWidth = 240;


const Root = () => {
  const [mode, setmyMOde] = useState(localStorage.getItem("currentMode") === null
  ? "dark"
  : localStorage.getItem("currentMode") === "light"
  ? "light"
  : "dark",);
  const darkTheme = createTheme({
    
    palette: {
      // @ts-ignore
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            ali:{
              main:'#647488',
            },
            favColor:{
              main:deepPurple[700]
            }
          
          }
        : {
            // palette values for dark mode
            ali:{
              main:'teal',
            },
            favColor:{
              main:'white'
            }
          }),
    },
  });


    


  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };


  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />

        <Drawerr
          drawerWidth={drawerWidth}
          setmyMOde={setmyMOde}
          noneORblock={noneORblock}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />


        <Box
          // className="border"
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
          
          
        </Box>
        
        
        <Footer drawerWidth={drawerWidth} showDrawer={showDrawer}  />
      </div>
      
      
      
    </ThemeProvider>
    
  );
};

export default Root;
