export const getNews = async (): Promise<any> => {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}