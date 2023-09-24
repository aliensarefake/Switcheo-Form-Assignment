import React from 'react';
import './PriceLoading.css';

const PriceLoading = (props) => {
    const {payPrice, rcvPrice, payCrypto, rcvCrypto, lastUpdated} = props;
    let ratio = parseFloat((rcvPrice/payPrice).toFixed(5))
    return(
        <div className='priceContainer'>
            1 {rcvCrypto} = {ratio} {payCrypto}   
            <span className='price'>(${parseFloat(rcvPrice.toFixed(2))})</span>
            <div className='lastUpdated'>
                <span className='dateHeader'>Last Updated: </span><span className='updatedDate'>{lastUpdated}</span>
            </div>
        </div>
    )
}

export default PriceLoading;