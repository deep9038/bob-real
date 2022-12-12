import React from "react";
import { Divider, List, ListItemButton, ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BobLogo from "../../Assates/Image/BOB-icon-logo.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { Link } from "react-router-dom";
const SideBarNaveIcone = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 100 }} >
        <ListItem alignItems="flex-start" style={{ padding: "0" }}>
          <ListItemAvatar
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              style={{ backgroundColor: "#ab9286", padding: "4px" }}
              src={BobLogo}
            />
          </ListItemAvatar>
        </ListItem>

        <ListItem
          alignItems="flex-start"
          style={{ padding: 0, marginTop: "19px"}}
   
        >
          <ListItemButton >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem alignItems="flex-start" style={{ padding: 0 }}>
          <ListItemButton>
            <ListItemIcon>
              <Link to='/customer'>
              <FaceRetouchingNaturalIcon />
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem alignItems="flex-start" style={{ padding: 0 }}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/Charts" >
              <ShowChartIcon/>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem alignItems="flex-start" style={{ padding: 0 }}>
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

<Divider style={{marginTop:"8px"}} />

<ListItem alignItems="flex-start" style={{ padding: 0 }}>
          <ListItemButton>
            <ListItemIcon>
             <AccountBalanceWalletIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>





        <ListItem alignItems="flex-start" style={{ padding: 0 }}>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>


        


      </List>
    </>
  );
};

export default SideBarNaveIcone;
