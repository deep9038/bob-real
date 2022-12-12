import React from "react";

import { AccounthandelGrup, HeaderContainer } from "./HeaderEliment";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* surchbar */}

        {/* action Buttons  start*/}
        <AccounthandelGrup>
      
        <Badge
            color="secondary"
            variant="dot"
            overlap="circular"
            style={{
              margin: "0 1rem"
            }}
          >
          <button style={{border:"none",height:"30px",width:"30px",paddingTop:"4px",borderRadius:'50%'}}>
          <ContactMailIcon style={{fontSize:"20px"}} />
          </button>
           
          </Badge>
           
          
          <Badge
            color="secondary"
            variant="dot"
            overlap="circular"
            style={{
              margin: "0 1rem",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <NotificationsIcon />
          </Badge>

          <Button variant="contained" color="success" disableElevation>
            Log Out
          </Button>
        </AccounthandelGrup>
      </HeaderContainer>
    </>
  );
};

export default Header;
