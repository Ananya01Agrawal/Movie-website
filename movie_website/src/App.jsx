import { useState, useEffect } from 'react'
import "./App.css";
import { fetchDataFromApi   } from './utils/api';

function App() {
  useEffect(() => {
    apiTesting();
  }, []);
  
  const apiTesting = () => {
    fetchDataFromApi('./movie/popular')
      .then(res => { // Corrected arrow function syntax
        console.log(res);
      }); // Added missing semicolon
    };
  }

  return (
    <div className="App">App </div>
  );
}

export default App;