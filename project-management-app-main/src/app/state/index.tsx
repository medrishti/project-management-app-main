import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export interface initialStateTypes{
    isSidebarCollapsed:boolean;
    isDarkMode: boolean;
}
const initialState :initialStateTypes={
    isSidebarCollapsed:false,
    isDarkMode: false,
};



export const globalSlice=createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollapsed=action.payload;
        },
        setIsDarkmode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode=action.payload;
        },
    },
});

export const {setIsDarkmode,setIsSidebarCollapsed}=globalSlice.actions;
export default globalSlice.reducer;
