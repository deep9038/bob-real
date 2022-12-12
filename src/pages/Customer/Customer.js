import React from "react";
import {Typography } from "@mui/material";
import Customeres from "./Customeres";





const Customer = () => {
  return (
    <div>
      {/* Top bar */}
      <div
        style={{ width: "100%", height: "60px", backgroundColor: "#ab9286",display:'flex',alignItems:"center"}}
      >
        <div
          style={{
            display: "inline-block",
            height: "100%",
            backgroundColor: "#6ae389b5",
            boxShadow: "3px 0px 15px 0px rgb(0 0 0 / 14%)",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "black",
              marginTop: "12px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            Customer
          </Typography>
        </div>



        {/* filter option   */}
        <div className="Filter" style={{display:"flex",flexDirection:'row',marginLeft:'auto',marginRight:'20px',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{margin:'0 10px'}}>
              <Typography variant="body2">
                Filter Option :
              </Typography>
            </div>
            <div style={{display:"flex",margin:'0 10px',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'110px',height:'30px',backgroundColor:'white',borderRadius:'4px'}}>
              <p style={{fontSize:"0.7rem"}} >Name :</p>
              <select style={{border:'none',borderRadius:'3px',fontSize:'0.8rem'}} >
                <option style={{fontSize:'0.8rem'}} value={"a-z"}>a-z</option>
                <option style={{fontSize:'0.8rem'}} value={"z-a"}>z-a</option>
              </select>
            </div>
            
            <div style={{display:"flex",margin:'0 10px',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'110px',height:'30px',backgroundColor:'white',borderRadius:'4px'}}>
              <p style={{fontSize:"0.7rem"}} >Time :</p>
              <select style={{border:'none',borderRadius:'3px',fontSize:'0.8rem'}} >
                <option style={{fontSize:'0.8rem'}} value={"a-z"}>Old-New</option>
                <option style={{fontSize:'0.8rem'}} value={"z-a"}>New-Old</option> 
              </select>
            </div>
          
        </div>

      </div>





      <div style={{height:"500px",margin:'10px',backgroundColor:"#e5b93e2e"}}>

          <div style={{height:"40px",backgroundColor:"#7dcb88", width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-arounds'}} >

                  <span   style={{width:'200px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >
                      ID 
                    </Typography>
                  </span>

                  <span   style={{width:'150px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >
                      Name 
                    </Typography>
                  </span>

                  <span   style={{width:'120px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >
                      Emi Date
                    </Typography>
                  </span>

                  <span   style={{width:'100px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >
                    Due Payment
                    </Typography>
                  </span>

                  <span   style={{width:'100px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >
                    Duration
                    </Typography>
                  </span>

                  <span   style={{width:'100px',display:'flex',alignItems:'center',justifyContent:"center",border:'1px solid black'}}>
                    <Typography variant="overline" align="center" >

                    </Typography>
                  </span>
                  
          </div>
          <Customeres/>
          

      </div>


    </div>
  );
};

export default Customer;
