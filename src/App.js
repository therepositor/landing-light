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

  const handleChange = (e, maxLength) => {
    maxLength = e.target.maxLength;
    e.preventDefault();
    let value = e.target.value;
    console.log(value);
    if(e.target.name === 'securityCode'){
      setState({
        ...state,
        [e.target.name]: value.slice(0, maxLength)
      })
    } else if (e.target.name === 'expirationDate') {
      setState({
        ...state,
        [e.target.name]: value.slice(0, maxLength)
      })
    } else if (e.target.name === 'creditCardNumber') {
      let splitStr = value.toString().split('');
      console.log(splitStr);
      while (value.length === 4 || value.length === 9 || value.length === 14) {
        let index = 4;
        let newStr = splitStr.splice(index,0,' ');
        console.log(splitStr);
        index = 9;
        newStr = splitStr.splice(index,0,' ');
        index = 14;
        newStr = splitStr.splice(index,0,' ');
        return splitStr;
      }
      setState({
        ...state,
        [e.target.name]: value.slice(0, maxLength)
      })
    }  else if (e.target.name === 'postalCode') {
      setState({
        ...state,
        [e.target.name]: value.slice(0, maxLength)
      })
    } else {
      setState({
        ...state,
        [e.target.name]: value.slice(0, maxLength)
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
