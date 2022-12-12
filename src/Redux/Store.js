import {configureStore} from "@reduxjs/toolkit"
import LoanAmountReducer from "./Feturs/CalCulatorSlice"

export const Store=configureStore({
    reducer:{
        LoanData:LoanAmountReducer
    }
}
)