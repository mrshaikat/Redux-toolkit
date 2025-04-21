import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import newsReducer from "../features/news/newsSlice";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        news: newsReducer
        // videos: videosReducer
    }
});

export default store;