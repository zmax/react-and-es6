import React from 'react';
import {HeartBeat} from './heartbeat';

/**
 * Higher-order Component Example
 *
 * 具備心跳功能的組件, 會依據 props.hr 心跳率來決定執行 update() 的快慢
 *
 * @class CountBeats
 * @method update
 */
class CountBeats extends React.Component {
    state = {beats: 0};
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState({beats: 0});
    }
    update() {
        this.setState({ beats: this.state.beats+1 });
        if (typeof this.props.onHeartBeat === 'function') {
            this.props.onHeartBeat();
        }
    }
    render() {
        console.log(this.state);
        return (
            <p>心跳數: {this.state.beats}</p>
        );
    }
};

export default HeartBeat(CountBeats);
