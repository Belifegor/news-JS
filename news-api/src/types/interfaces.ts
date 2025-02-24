export interface NewsArticle {
    title: string;
    description: string | null;
    url: string;
}

export interface NewsAPIResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface Source {
    id: string | null;
    name: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}
