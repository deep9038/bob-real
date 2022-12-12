import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Divider, ListItem, ListItemText } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Typography } from "@mui/material";
export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          style={{
            backgroundColor: "inherit",
            fontSize: "12px",
            color: "rgb(0 0 0 / 81%)",
            margin:'10px 0' 
          }}
          id="nested-list-subheader"
        >
          Bank Of Baroda
        </ListSubheader>
      }
    >
      <ListItemButton>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            Add User
          </Typography>
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/customer" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            Customer
          </Typography>
        </Link>
      </ListItemButton>

      <ListItemButton>
        <Link to="/Charts" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            Bisness Chart
          </Typography>
        </Link>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          disableTypography
          primary={
            <Typography
              type="body2"
              style={{ color: "black", fontSize: "1rem" }}
            >
              Loan category
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider />
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                type="body2"
                style={{ color: "black", fontSize: "1rem" }}
              >
                {" "}
                Starred
              </Typography>
            </Link>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItem style={{padding:'0'}} >
        <ListItemButton  style={{borderRight:"1px solid black",backgroundColor:"#378f37"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            {" "}
            Deposit
          </Typography>
        </Link>
        </ListItemButton>
       
        <ListItemButton style={{borderLeft:"1px solid black",backgroundColor:"#e72e2e"}}>
      <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            Withdrawl
          </Typography>
        </Link>
      </ListItemButton>
      </ListItem>








      <ListItemButton>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            type="body2"
            style={{ color: "black", fontSize: "1rem" }}
          >
            Sattings
          </Typography>
        </Link>
      </ListItemButton>

    

      

    

    
      


    </List>
  );
}
