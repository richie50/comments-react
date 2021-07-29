import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        // reducers are functions that takes in action and modifies the state by retruning a new state
        addTodo: (state, action) => {
            // this routine creates add a new todo state this the state Object
            const todo = {
                avatar: action.payload.avatar,
                author: action.payload.author,
                lastUpdated: action.payload.lastUpdated
                    // id: new Date(),
                    // title: action.payload.title,
                    // completed: false
            };
            state.push(todo); //OK
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex(f => f.title === action.payload.author);
            // removed 1 element from the index from above
            state.splice(index, 1);
        }
    }
});

export const { addTodo } = todoSlice.actions; // dispatchs? or actions
export const { deleteTodo } = todoSlice.actions; // dispatchs? or actions

export default todoSlice.reducer;