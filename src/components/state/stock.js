import { createSlice } from "@reduxjs/toolkit";
export const stockSlice = createSlice({
    name: "stock",
    initialState: {
        portfolio: [],
        priceHistory:{},
        doughnutData:{}
    },
    reducers: {
        clearStocks: (state) => {
            state.portfolio = [];
            state.priceHistory = {};
            state.doughnutData = {};
        },
        setPortfolio: (state, action) =>{
            state.portfolio = [...action.payload];
        },
        setPriceHistory: (state, action) =>{
            state.priceHistory = {...action.payload};
        },
        setDoughnutData: (state, action) =>{
            state.doughnutData = {...action.payload};
        }
    },
});

export const { clearStocks, setPortfolio, setPriceHistory, setDoughnutData } = stockSlice.actions;

export default stockSlice.reducer;