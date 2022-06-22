import React ,{useEffect}from 'react';
import styled, { keyframes } from "styled-components";

function Toast({ toastList, setList}) {

  
  const title=toastList[0]?.title; // 토스트 타입
  const description=toastList[0]?.description;// 토스트 설명
  const bg=toastList[0]?.backgroundColor;// 토스트 배경색
  const duration=toastList[0]?.duration;//토스트 지속 시간
 
  useEffect(()=>{
    const interval =setInterval(()=>{
      if(toastList.length){
        setList("")
      }
    },duration);//durtaion 이후 setList 안의 값을 비워서 삭제

    return ()=>{
      clearInterval(interval);
    }
  },[toastList])

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