import React from 'react';
import styled from 'styled-components'
const ChanelItem = ({key, description, name, path, handlerOpen}) => {
    return (
        <div key={key} style={{width: '100%', padding: '20px', position: 'relative'}}>
            <Chanel>
                <ChanelAction>
                    <img alt={'delete'} src={'delete.png'} width={'40px'}/>
                    <img alt={'edit'} src={'edit.webp'} width={'39px'} onClick={handlerOpen}/>
                    <img alt={'like'} style={{filter: 'grayscale(0.9)'}} src={'like.png'} width={'40px'}/>
                </ChanelAction>
                <ImgChanel alt={'item'} src={path}/>
                <ChanelName>{name}</ChanelName>
                <ChanelDescription>
                    <p>{description}</p>
                </ChanelDescription>
            </Chanel>
        </div>
    );
};

const Chanel = styled.div`
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
const ImgChanel = styled.img`
  width: 100%;
  height: 210px;
  transition:  0.5s ease-out;
`
const ChanelName = styled.h2`
  text-align: center;
  color: #0b410b;
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0;
  font-family: Tahoma,serif;
`
const ChanelDescription = styled.p`
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
const ChanelAction = styled.div`
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
export default ChanelItem;