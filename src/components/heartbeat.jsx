/**
 * Higher-order Component
 */
import React from 'react';

export const HeartRate = 60;
export var HeartBeat = HeartBeatComponent => class extends React.Component {

    interval = null;

    displayName = "HeartBeat";

    static propTypes = { hr: React.PropTypes.number };
    static defaultProps = { hr: HeartRate };

    constructor(props) {
        super(props);
    }

    // after mounting
    componentDidMount() {
        console.log('HeartBeat did mount');
        // this.interval = window.requestAnimationFrame(this.update.bind(this));
        this.interval = window.requestAnimationFrame( () => this.update() );
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.interval);
    }

    update() {
        // window.requestAnimationFrame(this.update.bind(this));
        window.requestAnimationFrame( () => this.update() );
    }

    render() {
        return <HeartBeatComponent {...this.props} {...this.state} />;
    }
};

export var CountBeats = CountBeatsComponent => class extends React.Component {

    interval = null;

    state = {beats: 0, ticks: 0, hr: HeartRate};

    constructor(props) {
        super(props);
    }

    // before mounting
    componentWillMount() {
        // console.log("CountBeats will mount");
        this.state.hr = 60 / (this.props.hr/60);
    }

    componentDidMount() {
        console.log('CountBeats did mount');
        this.interval = window.requestAnimationFrame( () => this.update() );
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.interval);
    }

    update() {
        // console.log(this.toString());
        this.state.ticks++;

        if (this.state.ticks > this.state.hr) {
            this.setState({ beats: this.state.beats+1 });
            this.state.ticks = 0;
        }

        window.requestAnimationFrame( () => this.update() );
    }
    render() {
        return <CountBeatsComponent {...this.props} {...this.state} />;
    }
};
