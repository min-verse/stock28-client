import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {},
        isAuthenticated: false,
        stocks:[],
        following:[],
        priceHistory:{},
        doughnutData:{}
    },
    reducers: {
        setUser: (state, action) => {
            state.profile = { ...action.payload };
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.profile = {};
            state.isAuthenticated = false;
            state.stocks=[];
            state.priceHistory={};
            state.doughnutData={};
        },
        setStocks: (state, action) =>{
            state.stocks = [...action.payload];
        },
        setFollowing: (state, action) =>{
            state.following = [...action.payload];
        },
        setPriceHistory: (state, action) =>{
            state.priceHistory = {...action.payload};
        },
        setDoughnutData: (state, action) =>{
            state.doughnutData = {...action.payload};
        },
        clearStocksData: (state) =>{
            state.stocks=[];
            state.priceHistory={};
            state.doughnutData={};
        }
    },
});

export const { setUser, clearUser, setStocks, setPriceHistory, setDoughnutData, clearStocksData, setFollowing } = userSlice.actions;

export default userSlice.reducer;