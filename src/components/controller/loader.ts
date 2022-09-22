import { ArticlesData, OptionsClassLoader, ApiKey, GenericOneType, ErrorCode } from '../types';

class Loader {
    protected readonly baseLink: string;
    protected readonly options: OptionsClassLoader;

    constructor(baseLink: string, options: OptionsClassLoader) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Partial<ApiKey> },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === ErrorCode.err1 || res.status === ErrorCode.err2)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<ApiKey>, endpoint: string): string {
        const urlOptions: Partial<ApiKey> = { ...this.options, ...options };
        let url: string;
        url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof ApiKey]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: GenericOneType, options: ApiKey | object = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler.bind(this))
            .then((res: Response): Promise<ArticlesData> => res.json())
            .then((data: ArticlesData): void => callback(data))
            .catch((err: Error): void => console.error(err));
    }
}

export default Loader;
