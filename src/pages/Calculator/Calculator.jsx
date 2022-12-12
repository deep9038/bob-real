import React from "react";
import { CalculatorContainer, LoanAmountCotiner } from "./CalculatorEliment";
import { Divider, Typography, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangLoneAmount,
  ChangLoneIntrast,
  ChangLoneTenure,
} from "../../Redux/Feturs/CalCulatorSlice";
import PieCharts from "./PieCharts";

const Calculator = () => {
  const LoanData = useSelector((state) => state.LoanData);
  const dispach = useDispatch();

  const TotalIntrast = Math.ceil(
    (LoanData.LoanAmount * LoanData.IntrastRate) / 100
  );

  const LoanEmi = Math.ceil(
    (LoanData.LoanAmount + TotalIntrast) / LoanData.LoanTenure
  );
  const Totalpayebl = TotalIntrast + LoanData.LoanAmount;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
     
      <CalculatorContainer>
      <Typography variant="h5" style={{ textAlign:"center",borderBottom:'1px solid black' }}>
        Calculator
      </Typography>
        <div style={{ display: "flex", flexDirection: "row",borderBottom:'1px solid black' ,borderLeft:"1px solid Black",borderRight: "1px solid black"}}>
          <div style={{ borderRight: "1px solid black" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <TextField
                id="outlined-adornment-amount"
                style={{ borderColor: "black", color: "black" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
                value={`${LoanData.LoanAmount}`}
                label="Loan Amount"
                disabled={true}
                color="success"
              />
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                onChange={(e) => dispach(ChangLoneAmount(e.target.value))}
                min={1}
                max={70}
              />
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <TextField
                style={{ borderColor: "black", color: "black" }}
                id="outlined-adornment-amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                label="Intrast Rate"
                value={`${LoanData.IntrastRate}`}
                disabled={true}
              />
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                valueLabelDisplay="auto"
                onChange={(e) => dispach(ChangLoneIntrast(e.target.value))}
                min={10}
                max={22}
              />
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <TextField
                id="outlined-adornment-amount"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <ButtonGroup
                        style={{ margin: "0" }}
                        aria-label="Disabled elevation buttons"
                      >
                        <Button value={"Yr"}>Yr</Button>
                        <Button value={"Mo"}>Mo</Button>
                      </ButtonGroup>
                    </InputAdornment>
                  ),
                }}
                value={`${LoanData.LoanTenure} Mo`}
              />
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                valueLabelDisplay="auto"
                min={3}
                max={84}
                onChange={(e) => dispach(ChangLoneTenure(e.target.value))}
              />
            </div>
          </div>
          <div id="Pie"style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}>
            <PieCharts  TotalIntrast={TotalIntrast} TotalAmount={LoanData.LoanAmount}/>
          </div>
        </div>
        <div>
          <LoanAmountCotiner>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" display="block" gutterBottom>
                Loan EMI
              </Typography>

              <TextField
                id="outlined-size-small"
                size="small"
                value={LoanEmi}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" display="block" gutterBottom>
                Total Interest Payable
              </Typography>

              <TextField
                id="outlined-size-small"
                size="small"
                value={TotalIntrast}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" display="block" gutterBottom>
                Total Payment (Principal + Interest)
              </Typography>

              <TextField
                id="outlined-size-small"
                size="small"
                value={Totalpayebl}
              />
            </div>
          </LoanAmountCotiner>
        </div>
      </CalculatorContainer>
    </div>
  );
};

export default Calculator;
