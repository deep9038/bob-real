import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Line from './Line';
import Bars from './Bar';
import Pies from './Pies'

export default function Chart() {
  const [charts, setCharts] = React.useState('linechart');

  const handleChange = (event) => {
    setCharts(event.target.value);
  };
 console.log("Graph data",charts);
  return (
    <>
    <Box sx={{ minWidth: 120 }} style={{marginTop:"20px",marginLeft:"16px"}}>
      <FormControl sx={{ m: 1, minWidth: 200}} color='success' >
        <InputLabel id="demo-simple-select-label">Select Your Chart</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={charts}
          label="Select Your Chart"
          onChange={handleChange}
        >
          <MenuItem value="linechart">Line Chart</MenuItem>
          <MenuItem value="barchart">Bar Chart</MenuItem>
          <MenuItem value="piechart">Pie Chart</MenuItem>
        </Select>
      </FormControl>
    </Box>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px 0'}}>
  {
    charts==="linechart"?<Line/>:""
  }
  {
    charts==="barchart"?<Bars/>:""
  }
  {
    charts==="piechart"?<Pies/>:""
  }
  </div>
    </>
  );
}