import React,{useState} from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import leftBackGround from './components/assets/LeftBg.png'
import CardDetails from './components/CardDetails';




function App() {
  
  return (
    <div className="App">
      <LeftBackground>
        <Img src={leftBackGround} />
      </LeftBackground>
      <CardDetails />

    </div>
  );
}

export default App;


const LeftBackground = styled.div`
  width:650px;
  height: 100%;
  position: relative;
  `

const Img = styled.img`
    width:100%;
    height:100%;
  `


