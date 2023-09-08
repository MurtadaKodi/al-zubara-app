import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Box, useTheme } from "@mui/material";


const Footer = ({ drawerWidth, showDrawer }) => {

  const themeee = useTheme()
  return (
    <div>
      <Box  sx={{ flexGrow: 1 }}>
        <MDBFooter className="" >
          <MDBContainer className="">
            <section
              className=""
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "1px",
                paddingBottom: "1px",
                paddingLeft: "auto",
                paddingRight: "auto",
              }}
            >
              <div>
                <h6
                  className=""
                  style={{ paddingTop: "10px", paddingLeft: "30px" }}
                >
                  © 2020 Copyright:
                </h6>
              </div>

              <div>
                <h6
                  className=""
                  style={{ paddingTop: "10px", paddingLeft: "60px" }}
                >
                  © 2020 Copyright:
                </h6>
              </div>

              <div  style={{justifyContent: "space-between", paddingRight: "1px" }}>
                <MDBBtn
                  outline
                  // color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  outline
                  // color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  outline
                  // color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn
                  outline
                  // color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  outline
                  // color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn> */}
              </div>

              {/* <div className='text-center p-3' style={{display:'flex' ,backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}

              {/* <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
              {/* </div> */}
            </section>
          </MDBContainer>
        </MDBFooter>
      </Box>
    </div>
  );
};
export default Footer;
