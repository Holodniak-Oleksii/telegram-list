import styled from 'styled-components';

const Channel = styled.div`
  width: 90%;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  -webkit-box-shadow: 0 0 3px 1px rgba(0,0,0,0.46);
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.46);
  &:hover > img{
    margin-top: -100px;
  }
`
const ImgChannel = styled.img`
  width: 100%;
  height: 210px;
  transition:  0.5s ease-out;
`
const ChannelName = styled.h2`
  text-align: center;
  color: #0b410b;
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0;
  font-family: Tahoma,serif;
`
const ChannelDescription = styled.div`
  height: 100px;
  overflow-y: scroll;
  padding: 0 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, .2) inset;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #e3e796, #999b39);
    border-radius: 10px;
  }
`
const ChannelAction = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 130px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  img:hover{
     filter: contrast(0.7)
  }
`
export {ChannelAction, ChannelDescription, ChannelName, ImgChannel, Channel}