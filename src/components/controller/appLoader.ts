import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '40fc8cf90e5247f288d21e83e664e1d7', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
