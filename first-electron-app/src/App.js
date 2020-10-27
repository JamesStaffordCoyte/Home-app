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
  useEffect(() => {
  //   if (length >= sayHello.length) {
  //     return;
  //   }
    
  //   setGreeting(greeting + sayHello[length]);
  //   setLength(length +);
  //   // Update the document title using the browser API
  // 7668a82a059cd5e03886cb35026ce1ab
    setInterval(()=> {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${API_KEY}`).then(response => {
        console.log(greeting)
        setGreeting(greeting + response.data.main.temp + " degrees Celcius!")
        // setGreeting("wtf")
      });
    }, 10000);
  }, []);
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
    </div>
  );
}

export default App;
