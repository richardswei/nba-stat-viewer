import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState("")

  async function callApi() {
    try {
      const res = await fetch(`http://localhost:9000/`);
      const json = await res.json();
      console.log('json', json)
      return json;
    } catch (err) {
      console.error('err', err);
      return null;
    }
  }

  useEffect(() => {
    callApi().then((res) => {
      try {
        setResponse(`Response is ${res["success"]}`)
      } catch (error) {
        console.error('err', error);
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {response}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
