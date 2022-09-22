import App from '../app/app';
import '../../global.css';
import '../view/sources/sources.css';

class Topic {
    private _app: App;
    public letter: string;
    constructor() {
        this._app = new App();
        this.letter = '';
    }

    showTopic() {
        const letters = document.querySelector('.alphabet') as HTMLElement;
        letters.addEventListener('click', (e: Event): void => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('alphabet__letter')) {
                const list: NodeListOf<Element> = document.querySelectorAll('.alphabet__letter');
                list.forEach((el: Element): void => {
                    el.classList.remove('active');
                });
                target.classList.add('active');
                this.letter = target.textContent as string;
                this._app.start(this.letter);
            }
        });
    }
}

export default Topic;
