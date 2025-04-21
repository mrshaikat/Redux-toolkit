import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNews } from "./newsApi";

interface NewsArticle {
    // Define the properties of a news article based on your API response
    title: string;
    body: string;
}

interface NewsState {
    news: NewsArticle[];
    isLoading: boolean;
    isError: boolean;
    error: string | null | undefined;
}

export const initialState: NewsState = {
    news: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchNews = createAsyncThunk<NewsArticle[], void>('news/fetchNews', async () => {
    const news = await getNews();
    console.log(news);
    return news;
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsArticle[]>) => {
                state.isLoading = false;
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message || null;
            });
        }
})

export default newsSlice.reducer;

