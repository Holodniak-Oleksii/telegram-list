import React from 'react';
import {HeaderTitle, TitleSite, ImgLogo} from './blocks/NavBarStyleBlocks'
const Header = () => {
    return (
            <HeaderTitle>
                <ImgLogo alt={'logo'} src={"logo.jpg"}/>
                <TitleSite>TelegramCatalog</TitleSite>
            </HeaderTitle>
    );
};

export default Header;