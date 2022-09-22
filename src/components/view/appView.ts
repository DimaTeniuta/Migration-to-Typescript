import News from './news/news';
import Sources from './sources/sources';
import { ArticlesData, SourcesData, NewsData, Source } from '../types';

export class AppView {
    protected news: News;
    protected sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Partial<ArticlesData>): void {
        const values: NewsData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData, letter: string): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values, letter);
    }
}

export default AppView;
