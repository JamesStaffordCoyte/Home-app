/* eslint-disable */

import React, {useState, useEffect} from 'react';
import Typist from 'react-typist';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

const clickedScreen = () => {
  display = "Welcome to the Matrix"
}

function App() {
  const [greeting, setGreeting] = useState("Hello James! Today's weather is ");
  const [count, setCount] = useState(0);
  useEffect(() => {
  //   if (length >= sayHello.length) {
  //     return;
  //   }
    
  //   setGreeting(greeting + sayHello[length]);
  //   setLength(length +);
  //   // Update the document title using the browser API
    const intervalId = setTimeout(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${API_KEY}`).then(response => {
          console.log(greeting)
          setGreeting(greeting + response.data.main.temp + " degrees Celcius!")
          // setGreeting("wtf")
      });
    }, 5000);
    return () => clearTimeout(intervalId); //This is important
  }, [greeting]);
  // // let listItem = <li></li>;
  // // console.log(process)
  // // if (process.length > 0) {
  // //   listItem = process.map((p) => {
  // //     return <li>{p.name}: {p.memory}</li>
  // //   })
  // // }
  // // console.log(listItem)
  return(
    <div className="App-header">
      <Typist key={greeting}>
        {greeting}
      </Typist>
      <p>{count}</p>
    </div>
  );
}

export default App;
