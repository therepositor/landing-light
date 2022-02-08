import React from 'react';
import HorizontalLine from './HorizontalLine';
import card from './card2.png';
import visa from './visa.png';
import paypal from './paypal.png';
import discover from './discover.png';


const Main = ({handleChange,state,handleSubmit}) => {
    

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

                          <input type="radio" name="paypal" id="paypal"  readOnly />
                          <label htmlFor="paypal">
                              <img src={paypal} alt="paypal" />
                          </label>
                  </div>
              </div>
              <form>
                  <div className="form-div">
                      <label htmlFor="credit-card-number">Credit card number</label>
                      <input  type="number"  id='credit-card-number' onChange={handleChange} name='creditCardNumber' placeholder='4324 5433 9382 1030' maxLength={16} 
                      value={state?.creditCardNumber ? state.creditCardNumber : ''}
                      />
                  </div>
                  <div className="form-div right">
                      <div className="label-container">
                          <label htmlFor="expiration-date">Expiration date</label>
                      </div>
                      <input  onChange={handleChange} type="number"  id='expiration-date' name='expirationDate' placeholder='03/24' maxLength={5}
                       value={state?.expirationDate ? state.expirationDate : ''}
                       />
                  </div>
                  <div className="form-div">
                      <label htmlFor="security-code">Security code</label>
                      <input type="number"  id='security-code' onChange={handleChange} name='securityCode' maxLength={3} placeholder='420'
                       value={state?.securityCode ? state.securityCode : ''}
                       />
                  </div>
                  <div className="form-div right">
                      <div className="label-container">
                          <label htmlFor="postal-code">Postal Code</label>
                      </div>
                      <input type="number"  id='postal-code' onChange={handleChange} name='postalCode' placeholder='10119' 
                      maxLength={5}
                      value={state?.postalCode ? state.postalCode : ''}
                      />
                  </div>
                  <div className="form-radio-div">
                      <input type="radio" name="next-purchase" readOnly id="next-purchase" />
                      <label htmlFor="next-purchase">Use this card for next time purchase</label>
                  </div>
                  <div className="submit-form">
                       <input type="submit" onClick={handleSubmit} value="Add card" />
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
