import React,{ useState,useEffect} from 'react';
import Toast from './components/Toast';
import styled from "styled-components";


function App() {
  const [list,setList]=useState([]);
  let toastProperties =null;
  const showToast = (type,duration)=>{
  switch(type){
    case "success":
      toastProperties={
        title:"Success",
        description:"This is a success toast component",
        backgroundColor:"#5cb85c",
        duration:duration
      }
    break;
    case "danger":
      toastProperties={
        title:"Danger",
        description:"This is a danger toast component",
        backgroundColor:"#d9534f",
        duration:duration,
      }
    break;
    case "info":
      toastProperties={
        title:"Info",
        description:"This is a info toast component",
        backgroundColor:"#5bc0de",
        duration:duration,
      }
    break;
    case "warning":
      toastProperties={
        title:"Warning",
        description:"This is a warning toast component",
        backgroundColor:"#f0ad4e",
        duration:duration,
      }
    break;
    default:
      toastProperties=[];
    }
  setList([...list,toastProperties]);
}

useEffect(()=>{
  showToast("success",3000)//Toast 띄우기 함수 실행(type,duration 전달)
},[])

  return (
    <Wrapper>
      <Toast toastList={list} setList={setList}/>
    </Wrapper>
  );
}
const Wrapper=styled.div`
margin:0 auto;
text-align:center;
margin-top:30px;
`

export default App;
