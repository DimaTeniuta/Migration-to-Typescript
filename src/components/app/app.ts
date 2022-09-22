import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourcesData, ArticlesData } from '../types/index';

class App {
    protected controller: AppController;
    protected view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(letter: string): void {
        const source = document.querySelector('.sources') as HTMLElement;
        source.addEventListener('click', (e: MouseEvent): void => {
            this.controller.getNews(e, (data) => this.view.drawNews(data as Partial<ArticlesData>));
        });
        this.controller.getSources((data) => this.view.drawSources(data as SourcesData, letter));
    }
}

export default App;
