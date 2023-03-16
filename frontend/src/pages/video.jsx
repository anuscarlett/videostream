
import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Comments from "../comments";

import FavoriteIcon from '@mui/icons-material/Favorite';


const Container=styled.div`
display:flex;
flex:1;
gap:25px;
`;
const Content=styled.div`
flex:5;
`;
const Videowrap=styled.div`

margin-right:150px;

`;

const Title=styled.h1`
 font-size:18px;
 margin-top:20px;
 margin-bottom:10px;
 color:${({theme})=>theme.text};
`;
const Details=styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
`;
const Info=styled.div`
 color:${({theme})=>theme.textSoft};
`;
const Buttons=styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.text};
margin-right:200px;
padding-bottom:5px;
`;
const Button=styled.div`
display:flex;
align-items:center;
gap:5px;
margin-left:10px;
cursor:pointer;
`;

const Hr=styled.hr`
   margin:15px 0px;
   border:0.5px solid ${({theme})=>theme.soft};
`;

const Video = () => {
    return ( 
       
        <Container>
            <Content>
           <Videowrap> 
            <iframe width="100%" height="400"
             src="https://www.youtube.com/embed/tgbNymZ7vqY"
             title="utube"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrpted-media; gyroscope; picture-in-picture"
             allowFullScreen
               >
            </iframe>
           </Videowrap>
           <Title>This isthe title</Title>
            <Details>
                <Info>23 views</Info>
                <Buttons>
                    <Button onClick={<FavoriteIcon></FavoriteIcon>}>
                    <FavoriteBorderIcon/>34
                    
                    </Button>
                    <Button>
                        <ShareIcon/>Share
                    </Button>
                </Buttons>
            </Details>
            <Hr/>
            <Comments/>
            </Content>
        </Container>
   
     );
}

export default Video;