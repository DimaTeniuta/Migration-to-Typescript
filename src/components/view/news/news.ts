import './news.css';
import { NewsData } from '../../types';

class News {
    draw(data: NewsData[]): void {
        let news: NewsData[];
        if (data.length >= 10) {
            news = data.filter((_item: NewsData, idx: number): boolean => {
                return idx < 10;
            });
        } else {
            news = data;
        }

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsData, idx: number): void => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;

            if (idx % 2) {
                (newsClone.querySelector('.news__item') as Element).classList.add('alt');
            }
            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `
            url(${item.urlToImage || 'img/news_placeholder.jpg'})
            `;
            (newsClone.querySelector('.news__meta-author') as Element).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as Element).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as Element).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as Element).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as Element).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as Element).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as Element).innerHTML = '';
        (document.querySelector('.news') as Element).appendChild(fragment);
    }
}

export default News;
