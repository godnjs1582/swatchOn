import React,{ useState,useEffect} from 'react';
import Toast from './components/Toast';
import styled from "styled-components";


function App() {


  return (
    <Wrapper>
      <Toast type={"danger"} duration={3000}/> 
      {/* success,warning,info,danger 4가지 경우와 duration 변경 */}
    </Wrapper>
  );
}
const Wrapper=styled.div`
margin:0 auto;
text-align:center;
margin-top:30px;
`

export default App;
