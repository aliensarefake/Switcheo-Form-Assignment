import React, { useState, useEffect } from 'react';
import './Form.css';
import InputBox from './InputBox/InputBox';
import SwapButton from './SwapButton/SwapButton';
import PriceLoading from './SwapButton/PriceLoading/PriceLoading';

const Form = () =>{
    // states for value
    const [payAmount, setPayAmount] = useState('');
    const [rcvAmount, setRcvAmount] = useState('');
    const [rcvPrice, setRcvPrice] = useState('')
    const [rcvValidate, setRcvValidate] = useState('')

    // states for chosen crypto
    const [payCrypto, setPayCrypto] = useState('');
    const [rcvCrypto, setRcvCrypto] = useState('');
    const [payPrice, setPayPrice] = useState('')
    const [payValidate, setPayValidate] = useState('')
    
    const [spin, setSpin] = useState(false);

    const handleClick = () => {
      setSpin(true);
    };
  
    useEffect(() => {
      if (spin) {
        setPayAmount(rcvAmount);
        setPayCrypto(rcvCrypto);
        setPayPrice(rcvPrice)
        setRcvAmount(payAmount);
        setRcvCrypto(payCrypto);
        setRcvPrice(payPrice)
        
        setTimeout(() => setSpin(false), 500); // Reset after 500ms
      }
    }, [spin]);

    // submit
    const [displayPrice, setDisplayPrice] = useState(false);
    const [loading, setLoading] = useState(false);
    const [process, setProcess] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(()=>{
        if (process===true){
            setLoading(true)
            // calculate ratio
            let ratio, newAmount
            ratio = payPrice/rcvPrice;
            newAmount = ratio*payAmount

            setTimeout(()=>{
                setLoading(false);
                setDisplayPrice(true)
                setRcvAmount(parseFloat(newAmount.toFixed(8)))
            }, 2500)
        }
    }, [process])


    return(
        <div className='formContainer'>
            <div className='formFirstRow'>
                <div>
                    Swap
                </div>
            </div>
            <div className='formSecondRow'>
                <InputBox text="You Pay" setAmount={setPayAmount} setCrypto={setPayCrypto} amount={payAmount} crypto={payCrypto} otherCrypto={rcvCrypto} setPrice={setPayPrice} validate={payValidate} setValidate={setPayValidate} setDisplayPrice={setDisplayPrice} setLastUpdated={setLastUpdated}/>
            </div>
             <div className='formThirdRow'>
                <div 
                    className={`exchangeButton ${spin ? 'spin' : ''}`} 
                    onClick={handleClick}
                >
                    <i className="uil uil-exchange-alt"></i>
                </div>
            </div>        
            <div className='formForthRow'>
                <InputBox text="You Receive" setAmount={setRcvAmount} setCrypto={setRcvCrypto} amount={rcvAmount} crypto={rcvCrypto} otherCrypto={payCrypto} setPrice={setRcvPrice} validate={rcvValidate} setValidate={setRcvValidate} loading={loading} setDisplayPrice={setDisplayPrice} setLastUpdated={setLastUpdated}/>
            </div>
            <div className='formFifthRow'>
                <SwapButton rcvPrice={rcvPrice} payPrice={payPrice} rcvAmount={rcvAmount} payAmount={payAmount} setRcvValidate={setRcvValidate} setPayValidate={setPayValidate} setProcess={setProcess}/>
                {displayPrice? <PriceLoading payPrice={payPrice} rcvPrice={rcvPrice} payCrypto={payCrypto} rcvCrypto={rcvCrypto} lastUpdated={lastUpdated}/>: ""}
            </div>   
        </div>
    )
}

export default Form;