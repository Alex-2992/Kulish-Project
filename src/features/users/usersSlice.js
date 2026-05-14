import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {id: "1", name: "John Doe", email: "john.doe@example.com"},
        {id: "2", name: "Jane Smith", email: "jane.smith@example.com"},
        {id: "3", name: "Alice Johnson", email: "alice.johnson@example.com"}
    ]
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            const index = state.list.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        }
    }
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
