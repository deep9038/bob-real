import React, { useState } from "react";
import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NestedList from "./SideBarNave";
import SideBarNaveIcone from "./SideBarNaveIcone";
const SideBar = () => {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div
      style={{
        width: "60px",
        backgroundColor: "rgb(241 138 50 / 73%)",
        height: "100%",
        position: "relative",
        zIndex: "2",
        boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.75)'
      }}
    >
      <button
        variant="contained"
        style={{ height: "50px", width:"60px",backgroundColor:"rgb(171 146 134)",boxShadow:"none",borderRadius:"inherit" ,padding:"0",border:"none"}}
       
        onMouseEnter={()=>setButtonClick(true)}
        onMouseLeave={()=>setButtonClick(false)}
      >
        
        {buttonClick ? <ArrowBackIosIcon style={{fontSize:"20px",color:"black"}} /> : <MenuIcon style={{fontSize:"20px",color:"black"}} />}
      </button>

      <SideBarNaveIcone/>

     
    

      <motion.div
        initial={{ x: -300 }}
        animate={buttonClick ? { x: 0 } : { x: -300 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={()=>setButtonClick(true)}
        onMouseLeave={()=>setButtonClick(false)}
        style={{
          position: "absolute",
          marginTop:'50px',
          width: "200px",
          backgroundColor: "white",
          height: "92%",
          boxShadow:'1px 2px 6px 0px rgb(0 0 0 / 75%)',
          left: "100%",
          top:"0",
        
        }}
      >
        <NestedList/>






      </motion.div>
    </div>
  );
};

export default SideBar;
