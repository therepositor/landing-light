import React from 'react';
import HorizontalLine from './HorizontalLine';
import card from './card2.png'


const Main = () => {
  return <div className='main'>
      <HorizontalLine />
        <section className='payment-option'>
            <div className='payment-information-container'>
                <div className="text">
                    <p className='payment-text'>Payment Information</p>
                    <p className='choose-text'>Choose your method of payment</p>
                </div>
                <div className="card-container">
                    <img src={card} alt="card" />
                </div>
            </div>
            <div className='card-information-container'>
                <div className='payment-choices-container'>
                    <div className="choices"></div>
                    <div className="choices"></div>
                    <div className="choices">
                        <form action="">
                            <input type="radio" name="paypal" id="paypal" />
                            <label htmlFor="paypal">

                            </label>
                        </form>
                    </div>
                    <div className="choices"></div>
                </div>
                <form action="">
                    <div className="form-div">
                        <label htmlFor="credit-card-number">Credit card number</label>
                        <input type="number"  id='credit-card-number' name='credit-card-number' placeholder='4324 5433 9382 1030'/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="expiration-date">Expiration date</label>
                        <input type="number"  id='expiration-date' name='expiration-date' placeholder='03/24'/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="security-code">Security code</label>
                        <input type="number"  id='security-code' name='security-code' placeholder='420'/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="postal-code">Postal Code</label>
                        <input type="number"  id='postal-code' name='postal-code' placeholder='10119'/>
                    </div>
                    <div className="form-div">
                        <input type="radio" name="next-purchase" id="next-purchase" />
                        <label htmlFor="next-purchase">Use this card for next time purchase</label>
                    </div>
                    <div className="submit-form">
                         <input type="submit" value="Add card" />
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
                 <span><span>Promotional Code: </span>Z4KXLM9A<span></span></span><span>N-60.00</span>
            </div>
        </section>
        <HorizontalLine />
        <section className='complete-payment'>
            <div className='button'>
                <button>Complete payment</button>
            </div>
            <div className='total'>
                <p>Total: N2556.64</p>
            </div>
        </section>
  </div>;
};

export default Main;
