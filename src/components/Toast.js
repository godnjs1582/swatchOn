import React ,{useEffect,useState}from 'react';
import styled, { keyframes } from "styled-components";

function Toast(props) {
  const type= props?.type;
  const duration=props?.duration;
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
  setList([toastProperties]);
}

useEffect(()=>{
  showToast(type,duration)//Toast 띄우기 함수 실행(type,duration 전달)
},[])
  
  const title=list[0]?.title; // 토스트 타입
  const description=list[0]?.description;// 토스트 설명
  const bg=list[0]?.backgroundColor;// 토스트 배경색
 
  useEffect(()=>{
    const interval =setInterval(()=>{
      if(list.length){
        setList("")
      }
    },duration);//durtaion 이후 setList 안의 값을 비워서 삭제

    return ()=>{
      clearInterval(interval);
    }
  },[list])
useEffect(()=>{
  showToast(type,duration)
},[])
  return (
  
    <Wrapper bg={bg}>
      <Title>{title}</Title>
      <Desc>{description}</Desc>   
    </Wrapper>
   
  )
}
const ToastAnimation = keyframes` 
0%{
  bottom:0px;
 
}
100%{
  bottom:30px;
}
`
const Wrapper=styled.div`
background:${(props)=>props.bg};
color:white;
padding:15px 20px;
border-radius:14px;
position:fixed;
z-index:10;
bottom:30px;
left:50%;
transform:translateX(-50%);
animation:${ToastAnimation} 0.5s forwards

`

const Title=styled.div`
font-size:18px;
font-weight:700;
font-family:Roboto;
letter-spacing:-0.03em;
`

const Desc=styled.div`
font-size:14px;
font-weight:400;
font-family:Roboto;
letter-spacing:-0.03em;
`

export default Toast