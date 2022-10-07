type Props = {
    articles?: [
        article: {
            author: string;
            title: string;
            publishedAt: string;
            url: string;
            urlToImage: string;
        }
    ];
    title?: string;
}


export default Props