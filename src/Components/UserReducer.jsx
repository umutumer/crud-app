import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/Data";



const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action)=>{
            state.push(action.payload)
        },
        updateUser:(state,action) =>{
            const {id,name,email} = action.payload;
            const upUser = state.find(user => user.id == id)
            if (upUser) {
                upUser.name = name;
                upUser.email = email;
            }
        },
        deleteUser: (state,action) =>{
            const {id} = action.payload;
            const delUser = state.find(user => user.id === id)
            if (delUser) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;