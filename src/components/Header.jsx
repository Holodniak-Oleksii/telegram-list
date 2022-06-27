import React from 'react';
import styled from 'styled-components'
const Header = () => {
    return (
            <HeaderTitle>
                <ImgLogo alt={'logo'} src={"logo.jpg"}/>
                <TitleSite>TelegramCatalog</TitleSite>
            </HeaderTitle>
    );
};

const HeaderTitle = styled.header`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.6);
`
const TitleSite = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin-left: 5px;
  color: #07cc07;
  font-style: italic;
`
const ImgLogo = styled.img`
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5%;
`
export default Header;