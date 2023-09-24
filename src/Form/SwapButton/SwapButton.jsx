import React from 'react';
import './SwapButton.css';

const SwapButton = (props) =>{
    const {payPrice, rcvPrice, payAmount, setRcvValidate, setPayValidate, setProcess} = props

    const resetValidation = (validationSetter) => {
        setTimeout(() => {
          validationSetter('');
        }, 2000); // Reset after 3 seconds (3000 milliseconds)
      };

      const handleSwapClick = () => {
        const validate = (amount, price, setValidation) => {
            if (amount === '' || payPrice === '') {
                setValidation('empty');
                resetValidation(setValidation);
                return false;
              }
              const numAmount = Number(amount);
              if (isNaN(numAmount) || numAmount < 0) {
                setValidation('invalid');
                resetValidation(setValidation);
                return false;
              }
              return true;
            };
      
        const isPayValid = validate(payAmount, payPrice, setPayValidate);

        if (rcvPrice===''){
            setRcvValidate('empty')
            resetValidation(setRcvValidate)
        }

        if (isPayValid && payPrice && rcvPrice) {
            setProcess(true);
            console.log(payPrice, rcvPrice)

            setTimeout(() => {
                setProcess(false);
              }, 3000);        
          }
      };
      

    return (
        <div className='swapButton' onClick={handleSwapClick}>
            <div className='swapText'>
                Swap
            </div>
        </div>
    )
}

export default SwapButton;