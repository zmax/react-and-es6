import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';
import CartItem from './components/cartitem';

var cartProps = {
    title: "iMAC 2015 version",
    initialQty: 0,
    price: 100,
    image: "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/I/MA/IMAC/IMAC?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453497403681",
    hr: 60 // Heart Rate (heartbeat per second)
};

ReactDOM.render(
    <CartItem {...cartProps}></CartItem>,
    document.querySelector('#app')
);
