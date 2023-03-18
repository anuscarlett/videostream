import React from "react";
import styled from "styled-components";
import cipher from "./img/logo.png";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FlashlightOnRoundedIcon from '@mui/icons-material/FlashlightOnRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const Container=styled.div`
flex:1;
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
position:sticky;
top:0px;
height:80px;
width:100vw;
`;
const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:100%;
padding:0px 20px;
`;
const Logo=styled.div`
display:flex;
align-items:center;
font-size:20px;
font-weight:bold;
padding:10px;
`;
const Img=styled.img`
display:flex;
align-items:center;
height:50px;
`;

const Item=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  cursor:pointer;
  margin:2px;
 
`;
const Notify=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  cursor:pointer;
  margin:2px;
    position:relative;
`;
const Count =styled.div`
  position:absolute;
  top:-2px;
  right:31px;
  background-color: rgb(201, 4, 4);
  color:white;
  font-size:11px;
  padding:1px 5px;
  border-radius:10px;
`
const Button=styled.button`
  padding:5px 15px;
  margin-right:15px;
  background-color:transparent;
  border:1px solid #F3912E;
  color:#F3912E;
  border-radius:3px;
  font-weight:500;
  margin-top:10px;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:5px;

`;

const Navbar = ({darkMode,setDarkMode}) => {
    return ( 
        <Container>
            <Wrapper>
             <Logo>
                <Img src={cipher}/>
                VIdeostream
             </Logo> 
             <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
             <Item>
               <HomeRoundedIcon/>
                Home
             </Item>
             </Link>
             <Item onClick={()=>setDarkMode(!darkMode)}>
               <FlashlightOnRoundedIcon/>
                {darkMode ? "Light" :"Dark"} Mode
             </Item>
             <Notify>
               <NotificationsRoundedIcon/>
               <Count>5</Count>
               Notifications
             </Notify>
             <Link to="signin" style={{textDecoration:"none"}}>
             <Button>
               <AccountCircleRoundedIcon/>
               SIGN IN
             </Button>
             </Link>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;
