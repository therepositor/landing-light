import React from 'react';
import HorizontalLine from './HorizontalLine';
import card from './card2.png';
import visa from './visa.png';
import paypal from './paypal.png';
import discover from './discover.png';


const Main = ({handleChange,state,handleSubmit}) => {
    console.log({handleChange, handleSubmit, state})

  return (
    <div className='main'>
        <HorizontalLine />
        <section className='payment-option'>
          <div className='payment-information-container'>
              <div className="text">
                  <p className='payment-text'>Payment Information</p>
                  <p className='choose-text'>Choose your method of payment.</p>
              </div>
              <div className="card-container">
                  <img src={card} alt="card" />
              </div>
          </div>
          <div className='card-information-container'>
              <div className='payment-choices-container'>
                  <div className="choices">
                      <img src={visa} alt="visa" />
                  </div>
                  <div className="choices">
                      <img src={discover} alt="discover" />
                  </div>
                  <div className="choices">
                      <form action="">
                          <input type="radio" name="paypal" id="paypal"  readOnly />
                          <label htmlFor="paypal">
                              <img src={paypal} alt="paypal" />
                          </label>
                      </form>
                  </div>
              </div>
              <form action="">
                  <div className="form-div">
                      <label htmlFor="credit-card-number">Credit card number</label>
                      <input  type="text"  id='credit-card-number' onChange={handleChange} name='creditCardNumber' placeholder='4324 5433 9382 1030' 
                      value={state?.creditCardNumber ? state.creditCardNumber : ''}
                      />
                  </div>
                  <div className="form-div right">
                      <div className="label-container">
                          <label htmlFor="expiration-date">Expiration date</label>
                      </div>
                      <input  onChange={handleChange} type="text"  id='expiration-date' name='expirationDate' placeholder='03/24'
                       value={state?.expirationDate ? state.expirationDate : ''}
                       />
                  </div>
                  <div className="form-div">
                      <label htmlFor="security-code">Security code</label>
                      <input type="text"  id='security-code' onChange={handleChange} name='securityCode' placeholder='420'
                       value={state?.securityCode ? state.securityCode : ''}
                       />
                  </div>
                  <div className="form-div right">
                      <div className="label-container">
                          <label htmlFor="postal-code">Postal Code</label>
                      </div>
                      <input type="text"  id='postal-code' onChange={handleChange} name='postalCode' placeholder='10119' 
                      
                      value={state?.postalCode ? state.postalCodetext : ''}
                      />
                  </div>
                  <div className="form-radio-div">
                      <input type="radio" name="next-purchase" readOnly id="next-purchase" />
                      <label htmlFor="next-purchase">Use this card for next time purchase</label>
                  </div>
                  <div className="submit-form">
                       <input type="submit" onSubmit={handleSubmit} value="Add card" />
                  </div>
              </form>
          </div>
      </section>
      <HorizontalLine />
      <section className='billing'>
          <div className="amount">
              <span>Subtotal</span><span>N2,497.00</span>
          </div>
          <div className="amount">
              <span>Estimated TAX</span><span>N119.64</span>
          </div>
          <div className="amount">
               <span><span>Promotional Code: </span><span className='code'>Z4KXLM9A</span></span><span>N-60.00</span>
          </div>
      </section>
      <HorizontalLine />
      <section className='complete-payment'>
          <div className='total'>
              <p>Total: N2556.64</p>
          </div>
          <div className='button'>
              <button>Complete payment</button>
          </div>
      </section>
    </div>
  )
};

export default Main;
