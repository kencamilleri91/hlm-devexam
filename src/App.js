import React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import styles from './styles/styles.scss';

import NewsPage from './containers/NewsPage.js';
import NewsSingleView from './containers/NewsSingleView.js';

export default function App({store}) {
    return (
        <div style={styles}>
            <HashRouter>
                <Switch>
                    <Route name="newsList" path="/" exact render={(props) => (
                        <NewsPage store={store} routerParams={props} />
                    )} />
                    <Route name="newsItemPage" path="/news/:newsItemId" exact render={(props) => (
                        <NewsSingleView store={store} routerParams={props} />
                    )} />
                </Switch>
            </HashRouter>
        </div>
    );
}

App.propTypes = {
    store: React.PropTypes.object.isRequired,
};
