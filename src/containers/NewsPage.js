import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';

import NewsSnippet from '../components/NewsSnippet.js';

const DATE_FORMAT = 'YYYY/MM/DD';

@observer class NewsPage extends React.Component {
    constructor() {
        super();
    }
    // In mobx, local state is maintained by setting observables
    // The design reason for assigning the number of items viewed to local state
    //    is that it is not too relevant to the overall state of the app,
    //    but rather, just the NewsPage component
    @observable numVisibleItems = 7
    @observable sortBy = 'date' // date, title
    @observable sortAscending = true

    lessDate(sortAscending, itemA, itemB) {
        const momentA = moment(itemA.date, DATE_FORMAT);
        const momentB = moment(itemB.date, DATE_FORMAT);
        if(momentA.isInvalid) { return sortAscending ? +1 : -1; }
        if(momentB.isInvalid) { return sortAscending ? -1 : +1; }
        if(momentA.isBefore(momentB)) { return sortAscending ? -1 : +1; }
        if(momentB.isBefore(momentA)) { return sortAscending ? +1 : -1; }
        return this.lessTitle(sortAscending, itemA, itemB);
    }
    lessTitle(sortAscending, itemA, itemB) {
        if(itemA.name < itemB.name) { return sortAscending ? -1 : +1; }
        if(itemA.name > itemB.name) { return sortAscending ? +1 : -1; }
        return 0;
    }
    renderNewsItems(newsItems) {
        let sortedItems = newsItems;
        switch(this.sortBy) {
            case 'date':
                sortedItems = newsItems.sort(this.lessDate.bind(this, this.sortAscending));
                break;
            case 'title':
                sortedItems = newsItems.sort(this.lessTitle.bind(this, this.sortAscending));
                break;
            default: break;
        }

        sortedItems = sortedItems.slice(0, Math.min(sortedItems.length, this.numVisibleItems));

        return sortedItems.map((newsItem, index) => (
            <NewsSnippet key={index} store={this.props.store} routerParams={this.props.routerParams} {...newsItem} />
        ));
    }
    @action
    onClickViewMore() {
        this.numVisibleItems += 7;
    }
    @action
    onClickSortByDate() {
        if(this.sortBy !== 'date') {
            this.sortBy = 'date';
            this.sortAscending = true;
        } else {
            if(this.sortAscending === true) {
                this.sortAscending = false;
            } else {
                this.sortBy = '';
                this.sortAscending = true;
            }
        }
    }
    @action
    onClickSortByTitle() {
        if(this.sortBy !== 'title') {
            this.sortBy = 'title';
            this.sortAscending = true;
        } else {
            if(this.sortAscending === true) {
                this.sortAscending = false;
            } else {
                this.sortBy = '';
                this.sortAscending = true;
            }
        }
    }
    backToTop() {

    }
    render() {
        const newsItems = this.props.store.newsItems;
        return (
            <div className="NewsPage">
                <div className="header">
                    <div>poker news</div>
                </div>
                <center className="inner">
                    <div className="sort noselect">
                        <div>
                            <span role="button" onClick={this.onClickSortByDate.bind(this)}>
                                <span style={{display: this.sortBy === 'date' ? null : 'none'}}>
                                    {this.sortAscending ? '▲' : '▼'}
                                </span>
                                Sort by Date
                            </span>
                        </div>
                        <div>
                            <span role="button" onClick={this.onClickSortByTitle.bind(this)}>
                                <span style={{display: this.sortBy === 'title' ? null : 'none'}}>
                                    {this.sortAscending ? '▲' : '▼'}
                                </span>
                                Sort by Title
                            </span>
                        </div>
                    </div>
                    <div className="content">
                        {this.renderNewsItems(newsItems)}
                    </div>
                    <a role="button" onClick={this.onClickViewMore.bind(this)} style={{ display: newsItems.length > this.numVisibleItems ? null : 'none' }}>
                        Click here to show more
                    </a>
                </center>
            </div>
        );
    }
}

NewsPage.propTypes = {
    store: React.PropTypes.object,
    routerParams: React.PropTypes.object,
};

export default NewsPage;
