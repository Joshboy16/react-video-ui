import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import pics from '../img/bird.png';
import Comments from '../components/Comments';
import Card from "../components/Card"

const Container = styled.div`
display: flex;
gap: 24px;
`;
const Content = styled.div`
flex: 5;
`;
const VideoWrapper = styled.div`
`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme}) => theme.text};
`;
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Info = styled.span`
color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme}) => theme.textSoft};
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px, solid ${({theme}) => theme.soft};
`;

const Recommendation = styled.div`
flex: 2;
`;
const Channel = styled.div`
display: flex;
justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aliceblue;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({theme}) => theme.textSoft};
font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%" height="720" src="https://www.youtube.com/watch?v=CCF-xV3RSSs" title='Youtube video player' frameBorder="0" allow='accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen>
          </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views . Jun 22, 2022</Info>
          <Buttons>
            <Button> <ThumbUpAltOutlinedIcon /> 123</Button>
            <Button><ThumbDownAltOutlinedIcon />  Dislike</Button>
            <Button><ReplyOutlinedIcon />  Like</Button>
            <Button><AddTaskOutlinedIcon />  Share</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={pics}/>
            <ChannelDetail>
              <ChannelName>Lama Dev</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolor explicabo debitis in. Voluptates veritatis sequi necessitatibus nam sapiente accusantium, recusandae, harum possimus placeat voluptate excepturi, atque sed labore quidem.</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
      </Recommendation>
    </Container>
  )
}

export default Video