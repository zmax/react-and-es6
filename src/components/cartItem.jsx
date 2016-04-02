import React from 'react';
import Button from './button';
import Image from './image';
import HelloWorld from './hello-world';
import { HeartBeat, CountBeats } from './heartbeat';

class CartItem extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        initialQty: React.PropTypes.number
    };

    static defaultProps = {
        title: 'Undefined Product',
        price: 0,
        initialQty: 0
    };

    state = {
        qty: this.props.initialQty,
        total: 0
    };

    totalStyle = {
        marginTop: 0,
        marginBottom: 0
    };

    constructor(props) {
        super(props);
        // bind this (old way)
        // this.increaseQty = this.increaseQty.bind(this);
        // this.increaseQty = () => this._increaseQty();
        // this.increaseQty = ::this.increaseQty;
        // this.decreaseQty = this.decreaseQty.bind(this);
        // this.decreaseQty = () => this._decreaseQty();
        // this.decreaseQty = ::this.decreaseQty;
    }
    increaseQty = () => {
        this.setState({ qty: this.state.qty+1 }, this.culateTotal);
    }
    decreaseQty = () => {
        this.setState({ qty: Math.max(this.state.qty-1, 0) }, this.culateTotal);
    }
    componentWillMount() {
        // console.log('CartItem will mount');
        this.culateTotal();
    }
    componentDidMount() {
        console.log('CartItem did mount');
    }
    culateTotal() {
        this.setState({
            total: this.state.qty * this.props.price
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <h1 className="text-center">{this.props.title}</h1>
                    </div>
                    <div className="col-xs-12 col-sm-12">
                        <Image source={this.props.image} responsive={true} />
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4"><Button label="+" onClick={this.increaseQty}></Button></div>
                    <div className="col-xs-4 col-sm-4"><h2 className="text-center" style={this.totalStyle}>${this.state.total}</h2></div>
                    <div className="col-xs-4 col-sm-4"><Button label="-" onClick={this.decreaseQty}></Button></div>
                </div>
                <hr/>
                <div className="col-xs-12 col-sm-12 text-center">單價: ${this.props.price}, 數量: {this.state.qty}</div>
                <div className="col-xs-12 col-sm-12 text-center">心跳數: {this.props.beats}</div>
                <HelloWorld phrase="ES6"/>                
            </div>
        );
    }
}

export default CountBeats(HeartBeat(CartItem));
// export default HeartBeat(CartItem);
