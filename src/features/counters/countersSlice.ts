import { createSlice } from '@reduxjs/toolkit';

const initialState = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
    ];

export interface Counter {
    id: number;
    value: number;
}

 interface IncrementAction {
    type: string;
    payload: number;
}

const conunterSlice = createSlice({
    name: 'counters',
    initialState: initialState as Counter[],
    reducers: {
        increment: (state: Counter[], action: IncrementAction) => {
            const counter = state.find(counter => counter.id === action.payload);
            if (counter) {
                counter.value++;
            }
        },
        decrement: (state: Counter[], action: IncrementAction) => {
            const counter = state.find(counter => counter.id === action.payload);
            if (counter) {
                counter.value--;    
            }
        },
    }
})


export default conunterSlice.reducer;
export const { increment, decrement } = conunterSlice.actions;