import React from 'react';
import './Token.css';

const Token = (props) => {
    const {currency, name, onChange, isOpen, setCrypto, setPrice, price, otherCrypto, setDisplayPrice, setLastUpdated, date} = props
    const handleTokenClick = () => {
        onChange(!isOpen);
        setCrypto(currency);
        setPrice(price);
        setDisplayPrice(false)
        setLastUpdated(date)
        console.log(date, 'inside')
    }   

    const dynamicStyle = otherCrypto === currency ? 'selectedToken' : '';


    return(
        <div className={`tokenContainer ${dynamicStyle}`} onClick={handleTokenClick}>
            <img className='tokenImg' src={`cryptoImg/${currency}.svg`}></img>
            <div className='tokenName'>
                <div className='tokenMainName'>   
                    {name}
                </div>
                <div className='tokenSubName'>
                    {currency}
                </div>
            </div>
        </div>
    )
}

export default Token;