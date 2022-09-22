export type GenericOneType = <T>(data: T) => void;

export enum ErrorCode {
    err1 = 401,
    err2 = 404,
}

export interface ApiKey {
    apiKey: string;
    sources: string;
}

export type OptionsClassLoader = Pick<ApiKey, 'apiKey'>;

export interface NewsData {
    source: {
        id: string;
        name: string;
    };
    author: string;
    content: string;
    description: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface SourcesData extends Source {
    sources: Source[];
}

export interface ArticlesData {
    status: string;
    totalResults: number;
    articles: NewsData[];
}
