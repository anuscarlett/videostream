
import styled from 'styled-components';
import Comment from './comment';
import React from "react";
const Container=styled.div``;

const NewComment=styled.div``;

const Input=styled.input`
border:none;
border-bottom:1px solid ${({theme})=>theme.soft};
background-color:transparent;
outline:none;
padding:5px;
font-size:18px;
padding-top:8px;
width:70vw;
`;


const Comments = () => {
    return ( 
        <Container>
            <NewComment>
                <div>Comments:</div>
                <Input placeholder='Add a comment...'/>
            </NewComment>
        
            <Comment/>
            <Comment/>
        </Container>
     );
}

export default Comments;