import React, {useEffect, useState} from 'react';
import './InputBox.css';
import CryptoDisplay from './CryptoDisplay/CryptoDisplay';
import CryptoModal from './CryptoModal/CryptoModal';

const InputBox = (props) => {
    const {text, setAmount, amount, setCrypto, crypto, setPrice, validate, otherCrypto, loading, setDisplayPrice, setLastUpdated} = props
    console.log("LOADING", loading)
    const handleInputChange = (event) => { 
        setAmount(event.target.value);
      };

    // onClick Modal Logic
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
      setModalOpen(!isModalOpen);
    };

    // input validation
    const [dynamicStyle, setDynamicStyle] = useState('');
    useEffect(() => {
        if (validate === 'empty' || validate === 'invalid') {
          setDynamicStyle('invalid');
    
          const timer = setTimeout(() => {
            setDynamicStyle('');
          }, 2000);
        }
      }, [validate])

    return(
        <div className={`inputBoxContainer ${dynamicStyle}`}>
            <div className='cryptoInput'>
                <div className='payOrRcv'>
                    {text} 
                    {loading && <div className="loadingCircle"></div>}
                </div>
                <input placeholder='0' className={`cryptoValue`} value={amount} onChange={handleInputChange}/>
                <div className='cryptoChoices'>

                </div>
            </div>
            <div className='cryptoWrapper'>
                <CryptoDisplay crypto={crypto} onClick={handleModal}/>
                <CryptoModal isOpen={isModalOpen} onChange={setModalOpen} setCrypto={setCrypto} setPrice={setPrice} otherCrypto={otherCrypto} setDisplayPrice={setDisplayPrice} setLastUpdated={setLastUpdated}/>
            </div>
        </div>
    )
}

export default InputBox