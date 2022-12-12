import React from 'react'
import { Typography } from '@mui/material'
const Customeres = () => {
  return (
    <div className="Customes" style={{display:'flex',flexDirection:'row',justifyContent:'space-arounds'}}>


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
  )
}

export default Customeres
