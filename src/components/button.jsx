import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
    state = {
        label: 'Button',
        active: true
    };
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({ label: this.props.label });
    }
    render() {
        var btnClass = classNames({
            'btn': true,
            'btn-primary': this.state.active,
            'col-xs-12': true,
            'col-sm-12': true
        });

        return <div className={btnClass} onClick={this.props.onClick}>{this.state.label}</div>
    }
}
