import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        // this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate();
    }
    render() {
        return <h1 className="text-center">HelloWorld from {this.props.phrase}!</h1>
    }
};
