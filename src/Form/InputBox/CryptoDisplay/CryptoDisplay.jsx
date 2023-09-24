import React, {useState, useEffect} from 'react';
import './CryptoDisplay.css';

const CryptoDisplay = (props) => {
    const {crypto, url, onClick} = props
    return(
        <div>
        {
            crypto ? 
            <div className='cryptoContainer' onClick={onClick}>
                <div className='crypto'>
                    <img src={`cryptoImg/${crypto}.svg`} className='cryptoImg'></img>
                    <div className='cryptoText'>
                        {crypto}
                    </div>
                </div>
                <i className="uil uil-angle-down"></i>
            </div> 
            
            : 

            <div className='selectTokenContainer' onClick={onClick}>
                <div className='tokenText'>Select Token </div>
                <i className="uil uil-angle-down"></i>
            </div>
        }
        </div>

    )
}

export default CryptoDisplay; 