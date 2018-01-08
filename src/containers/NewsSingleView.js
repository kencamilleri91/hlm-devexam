import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer class NewsSingleView extends React.Component {
    constructor() {
        super();
    }
    render() {
        const newsItemId = this.props.routerParams.match.params.newsItemId;
        return (
            <center className="NewsSingleView">
                <br/>
                <div>This is a sample page to indicate that a news item is being viewed to demonstrate react-router's abilities.</div>
                <br/>
                <div>You are currently viewing newsItemId {newsItemId}</div>
                <br/>
                <Link to="/">Click here to go back</Link>
            </center>
        );
    }
}

NewsSingleView.propTypes = {
    store: React.PropTypes.object,
    routerParams: React.PropTypes.object,
};

export default NewsSingleView;
