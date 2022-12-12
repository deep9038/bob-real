import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LoanAmount:100000,
  IntrastRate: 10,
  LoanTenure: 3,
};


export const LonaCalCulatorSlice = createSlice({
  name: "LoanCalCultorData",
  initialState,
  reducers: {
    ChangLoneAmount: (state, action) => {
    state.LoanAmount = action.payload * 100000 ;
    
    },
    ChangLoneIntrast:(state,action)=>{
        state.IntrastRate = action.payload
        
    },
    ChangLoneTenure:(state,action)=>{
        state.LoanTenure = action.payload 
       
    }
  },
});

export const {ChangLoneAmount,ChangLoneIntrast, ChangLoneTenure} = LonaCalCulatorSlice.actions;
export default LonaCalCulatorSlice.reducer;
