import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice(
    {
        name:'count',
        initialState:{
            value:0
        },
        reducers:{
            incrimentCounter:(state,action)=>{
                state.value +=1;
            },
            dicrimentCounter:(state,action)=>{
                state.value -=1;
            }
        }
    }
)

export const counterReducer = counterSlice.reducer;
export const {incrimentCounter,dicrimentCounter} = counterSlice.actions;