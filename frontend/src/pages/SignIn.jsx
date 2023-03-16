
import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh-56px);
color:${({theme})=>theme.text};
`;
const Wrapper=styled.div`
display:flex;
align-items:center;
flex-direction:column;
background-color:${({theme})=>theme.bgLighter};
border:1px solid ${({theme})=>theme.soft};
padding:20px 50px;
`;
const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  border:none;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  margin-top:5px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(email)
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    // dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      console.log(res.data)
      // dispatch(loginSuccess(res.data));
      // navigate("/")
    } catch (err) {
      // dispatch(loginFailure());
    }
  };

    return ( 
        <Container><Wrapper>
            <Title>Sign in</Title>
            <SubTitle>continue with account</SubTitle>
            <Input placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Button onClick={handleLogin}>Sign In</Button>
            
            <Title>Or</Title>
            <Input placeholder="username" onChange={(e)=>setName(e.target.value)}/>
            <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button >Sign Up</Button>
            </Wrapper>
            <More>
                English(UK)
                <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
                </Links>
            </More>
            </Container>
     );
}
 
export default SignIn;