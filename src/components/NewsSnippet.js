import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import moment from 'moment';

const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = 'YYYY/MMM/DD';

@observer class NewsSnippet extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { name, description, date, section, previewSrc, newsItemId, hoverText } = this.props;
        return (
            <Link className="NewsSnippet" to={'/news/' + newsItemId} title={hoverText}>
                <div className="thumbnail">
                    <img src={previewSrc} />
                </div>
                <div className="row">
                    <div className="name">{name}</div>
                    <div className="details">
                        <span className="date">{moment(date, DATE_INPUT_FORMAT).format(DATE_DISPLAY_FORMAT)}</span>
                        &nbsp;|&nbsp;
                        <span className="section">{section}</span>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </Link>
        );
    }
}

NewsSnippet.propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    date: React.PropTypes.string,
    section: React.PropTypes.string,
    previewSrc: React.PropTypes.string,
    newsItemId: React.PropTypes.string,
    hoverText: React.PropTypes.string,
    routerParams: React.PropTypes.object,
    store: React.PropTypes.object,
};

export default NewsSnippet;
