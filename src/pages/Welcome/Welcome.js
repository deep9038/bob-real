import React from "react";

import "./Welcome.css";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Typography } from "@mui/material";
import {BsCurrencyDollar} from "react-icons/bs"
const Welcome = () => {
  return (
    <div className="main_box">
      <div className="box box1">
        <div className="IconeBack green">
          <FaMoneyBillAlt size={30} />
        </div>
        <div className="boxText">
        <Typography variant="caption"  >
            loans Disbursed
        </Typography>
        <Typography variant="subtitle2" >
            {`48475,484,498`}
        </Typography>
        </div>
        
      </div>
      <div className="box box2">
        <div className="IconeBack red">
          <BsCurrencyDollar size={30} />
        </div>
        <div className="boxText">
        <Typography variant="caption"  >
            loans Disbursed
        </Typography>
        <Typography variant="subtitle2" >
            {`48475,484,498`}
        </Typography>
        </div>
      </div>
      <div className="box box3">
        <div className="IconeBack blue">
          <FaMoneyBillAlt size={30} />
        </div>
        <div className="boxText">
        <Typography variant="caption"  >
            loans Disbursed
        </Typography>
        <Typography variant="subtitle2" >
            {`48475,484,498`}
        </Typography>
        </div>
      </div>
      <div className="box box4">
        <div className="IconeBack yellow">
          <FaMoneyBillAlt size={30} />
        </div>
        <div className="boxText">
        <Typography variant="caption"  >
            loans Disbursed
        </Typography>
        <Typography variant="subtitle2" >
            {`48475,484,498`}
        </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
