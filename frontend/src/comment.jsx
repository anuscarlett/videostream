import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';
const Container =styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`;
const Details=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;
const Name=styled.div`
font-size:14px;
font-weight:500;
`;
const Text=styled.div`
margin-right:38px;
font-size:14px;
font-weight:400;
`;

    
const Comment=()=>{
    const [text, setText] = useState("");
  
    useEffect(() => {
      let r_text = new Array();
      r_text[0] = '"Great Video"';
      r_text[1] = '"good"';
      r_text[2] = '"best content"';
      r_text[3] = 'All the best';
  
      var i = Math.floor(r_text.length * Math.random());
      setText(r_text[i])
    },[])
    return(
        <Container>
            <Details>
                <Name>
                    Anu
                </Name>
                <Text>
                   {text}
                </Text>
            </Details>
        </Container>
    )
}


export default Comment