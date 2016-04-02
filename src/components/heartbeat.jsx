import React from 'react';

export const HeartRate = 60;
/**
 * 研究 Use Decorators instead of Mixins
 * 參考 https://gist.github.com/catalin-enache/90ba954a3d8312fc516e
 *
 * Decorator Pattern
 * 關於此設計模式也可以看看有趣的範例 http://weisnote.blogspot.tw/2013/05/decorator-pattern.html
 *
 * @function HeartBeat
 *
 */
export const HeartBeat = ComposedComponent => class extends ComposedComponent {

    static propTypes = { hr: React.PropTypes.number };
    static defaultProps = { hr: HeartRate };

    interval = null;

    state = {hr: HeartRate, ticks: 0};

    updateHeartRate(hr) {
        this.state.hr = Math.round(60/(hr/60));
    }
    componentWillMount() {
        this.updateHeartRate(this.props.hr);
        if (super.componentWillMount) super.componentWillMount();
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.interval);
        if (super.componentWillUnmount) super.componentWillUnmount();
    }
    componentDidMount() {
        console.log('HeartBeat did mount');
        // this.interval = window.requestAnimationFrame(this.update.bind(this));
        this.interval = window.requestAnimationFrame( () => this.update() );
        if (super.componentDidMount) super.componentDidMount();
    }
    update() {
        this.state.ticks++;
        if (this.state.ticks > this.state.hr) {
            super.update();
            this.state.ticks = 0;
        }
        // window.requestAnimationFrame(this.update.bind(this));
        window.requestAnimationFrame( () => this.update() );
    }
    reunder() {
        <ComposedComponent {...props} {...state} />
    }
}
