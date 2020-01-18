import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App2 = ()=> {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{console.log('componentDidMount')}, []);
    useEffect(()=>{console.log('componentDidUpdate')});
    return (
        <div>
            <div>{counter}</div>
            <button onClick={()=>{setCounter(counter+1)}}>Inc</button>
        </div>
    )
}


export default App2;
