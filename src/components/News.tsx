
import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';

interface NewsItem {
    id: string;
    title: string;
    body: string;
}

interface NewsState {
    news: Array<NewsItem>;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

const News: FC = () => {
    const { news, isLoading, isError, error }: NewsState = useSelector((state: any) => state.news);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchNews());
        console.log(news)
    }, [dispatch]);

    let content: JSX.Element | null;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (!isLoading && isError) {
        content = <div>Error: {error}</div>;
    } else if (!isLoading && !isError && news?.length === 0) {
        content = <div>No news available</div>;
    } else {
        content = (
            <>
                {news?.map((item: NewsItem) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default News;