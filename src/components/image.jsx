import React from 'react';
import classNames from 'classnames';

export default class Image extends React.Component {

    static propTypes = {
        source: React.PropTypes.string.isRequired,
        responsive: React.PropTypes.bool
    };

    static defaultProps = {
        responsive: true
    };

    state = {
        responsive: this.props.responsive
    };

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({ responsive: this.props.responsive });
    }

    render() {
        var imgClass = classNames({
            'img-responsive': this.state.responsive
        });

        return <img className={imgClass} src={this.props.source}></img>;
    }
};
