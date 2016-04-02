import React from 'react';
import {HeartBeat} from './heartbeat';

/**
 * Higher-order Component Example
 *
 * 具備心跳功能的組件, 會依據 props.hr 心跳率來決定執行 update() 的快慢
 *
 * ES7 decorators
 * http://technologyadvice.github.io/es7-decorators-babel6/
 *
 * @class CountBeats
 * @method update
 */
@HeartBeat
export default class CountBeats extends React.Component {
    state = {beats: 0};
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('CountBeats did mount');
        this.setState({beats: 0});
    }
    update() {
        this.setState({ beats: this.state.beats+1 });
        if (typeof this.props.onHeartBeat === 'function') {
            this.props.onHeartBeat();
        }
    }
    render() {
        return (
            <p>心跳數: {this.state.beats}</p>
        );
    }
};

// export default HeartBeat(CountBeats);
