import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice(
    {
        name:'color',
        initialState:{
            value:'black'
        },
        reducers:{
            setColor:(state,action)=>{
                state.value = action.payload.color;
            }
        }
    }
)


export const colorReducer = colorSlice.reducer;
export const  {setColor} = colorSlice.actions;
