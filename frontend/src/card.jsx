import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container=styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
overflow: hidden;
`;
const Image=styled.img`
width:95%;
height:202px;
border-radius:8px;
`;
const Texts=styled.div``;

const Title=styled.h1`
font-size:16px;
font-weigth:500;
color:${({theme})=>theme.text};
`;
const Info=styled.div`
color:${({theme})=>theme.text}
`;


const Card = ({type,video}) => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container><Image src={video.imgUrl}/>
        <Texts>
           <Title>{video.title}</Title>
           <Info>{video.desc}</Info>
           <Info>{video.views} views</Info>
        </Texts>
        </Container>
        </Link>
    );
}
 
export default Card;