import { observable, action } from 'mobx';

const testAPIMode = true;

class HLMStore {
    @observable newsItems = [];

    constructor() {
        this.ajaxGetStoreItems = this.ajaxGetStoreItems.bind(this);

        this.ajaxGetStoreItems();
    }

    @action
    ajaxGetStoreItems() {
        if(testAPIMode) {
            this.newsItems = testNewsItemsArray;
        } else {
            // Code for actual AJAX call would go here if there was such a webhook that returned an array of news items
            // this is an example of how it would look like using 'superagent', where request is imported via import superagent from 'superagent'
            /*
            request
                .get("/api/news-items")
                .set("Accept", 'application/json')
                .end(action((err, res) => {
                    this.newsItems = res.body.newsItems
                    // Potential error handling
                }))
            */
        }
    }
}

const testNewsItemsArray = [
    {
        name: 'Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-2-10',
        section: 'Online poker',
        previewSrc: './img/article-1.jpg',
        newsItemId: '1',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-3-2',
        section: 'Online poker',
        previewSrc: './img/article-2.jpg',
        newsItemId: '2',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Phasellus varius velit ut egestas porta',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-2-12',
        section: 'Online poker',
        previewSrc: './img/article-3.jpg',
        newsItemId: '3',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Nunc vitae ante in dolor rhoncus imperdiet vehicula sed urna',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-2-11',
        section: 'Online poker',
        previewSrc: './img/article-4.jpg',
        newsItemId: '4',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Aliquam non orci non lacus rutrum gravida eu id quam',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-8-10',
        section: 'Online poker',
        previewSrc: './img/article-5.jpg',
        newsItemId: '5',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Fusce nec sem euismod, vulputate libero at, venenatis enim',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-6-21',
        section: 'Online poker',
        previewSrc: './img/article-6.jpg',
        newsItemId: '6',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Suspendisse at dui ut orci euismod efficitur',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-9-27',
        section: 'Online poker',
        previewSrc: './img/article-1.jpg',
        newsItemId: '7',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'In sagittis quam aliquam turpis fermentum ullamcorper',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-10-10',
        section: 'Online poker',
        previewSrc: './img/article-1.jpg',
        newsItemId: '8',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Apendisse aliquet magna et sem fringilla, vel cursus mi imperdiet',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-10-11',
        section: 'Online poker',
        previewSrc: './img/article-2.jpg',
        newsItemId: '9',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Curabitur nec nulla pulvinar, porttitor velit in, laoreet elit.',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-10-20',
        section: 'Online poker',
        previewSrc: './img/article-3.jpg',
        newsItemId: '10',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Etiam ut neque fringilla nisi lobortis ultrices molestie eu ligula.',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-11-03',
        section: 'Online poker',
        previewSrc: './img/article-4.jpg',
        newsItemId: '11',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Vivamus at justo ac libero molestie faucibus.',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-11-04',
        section: 'Online poker',
        previewSrc: './img/article-5.jpg',
        newsItemId: '12',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Nam vulputate magna ut eleifend faucibus.',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-2-16',
        section: 'Online poker',
        previewSrc: './img/article-6.jpg',
        newsItemId: '13',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
    {
        name: 'Proin id ipsum sit amet velit euismod lacinia ut vel lacus.',
        description: 'An addiction to approval can be a nightmare for your poker game. You keep risks to a',
        date: '2016-11-24',
        section: 'Online poker',
        previewSrc: './img/article-1.jpg',
        newsItemId: '14',
        hoverText: 'Click here to read the following article: Pick a Game for the win: Practice and Win at REAL Poker Like a Pro',
    },
];

export default window.store = new HLMStore;
