import './sources.css';
import { Source } from '../../types';

class Sources {
    draw(data: Source[], letter: string): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        (document.querySelector('.sources') as HTMLElement).innerHTML = '';
        data.forEach((item: Source): void => {
            if (item.name[0] === letter) {
                const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
