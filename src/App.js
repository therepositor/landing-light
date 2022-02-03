import Index from './routes/Index'
import './App.css';
import { useState } from 'react';


function App() {
  const [cardDetails, setCardDetails] = useState({});
  const [state, setState] = useState({
    securityCode: '',
    expirationDate: '',
    creditCardNumber: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    console.log(value);
    if(e.target.name === 'securityCode'){
      setState({
        ...state,
        [e.target.name]: value
      })
    } else if (e.target.name === 'expirationDate') {
      setState({
        ...state,
        [e.target.name]: value
      })
    } else if (e.target.name === 'creditCardNumber') {
      setState({
        ...state,
        [e.target.name]: value
      })
    } else {
      setState({
        ...state,
        [e.target.name]: value
      })
    }
    return state;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCardDetails({
      ...cardDetails, state
    })
  };
  
  return (
    <div className="App">
      <Index handleSubmit={handleSubmit} handleChange={handleChange} state={state}/>
    </div>
  );
}

export default App;
