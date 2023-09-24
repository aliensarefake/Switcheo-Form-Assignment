import React, {useState, useEffect} from 'react';
import './CryptoModal.css';
import Token from '../CryptoDisplay/Token/Token';

const CryptoModal = ({isOpen, onChange, setCrypto, setPrice, otherCrypto, setDisplayPrice, setLastUpdated}) => {
    // fetching token data
    const [tokenData, setTokenData] = useState({})
    useEffect(() => {
        fetch('./price.json')
          .then(response => response.json())
          .then(data => {
            setTokenData(data)
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      }, []);
  
    // display/hiding logic
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setShow(true);
      } else {
        setTimeout(() => setShow(false), 300); 
      }
    }, [isOpen]);
  
    if (!show) {
      return null;
    }
    
      return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={()=>{onChange(!isOpen)}}>
          <div className={`modal-content ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className='selectRow'>
                <div className='modalText'>
                    Select a token
                </div>
                <i class="uil uil-times" onClick={()=>{onChange(!isOpen)}}></i>
            </div>
            <div className='commonTokens'>

            </div>
            <div className='lineBreak'></div>
            <div className='tokens'>
                {
                tokenData.map((token)=>(
                    <Token name={token.name} currency={token.currency} onChange={onChange} isOpen={isOpen} setCrypto={setCrypto}
                    setPrice={setPrice} price={token.price} otherCrypto={otherCrypto} setDisplayPrice={setDisplayPrice} setLastUpdated={setLastUpdated}
                    date={token.date}
                    />
                ))
                }
            </div>
          </div>
        </div>
      );
    };

export default CryptoModal;