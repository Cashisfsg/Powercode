import React from 'react';
import styled from 'styled-components';

import LinkedIn from '../icons/linkedin.svg';
import Facebook from '../icons/facebook.svg';
import YouTube from '../icons/youtube.svg';
import Telegram from '../icons/telegram.svg';
import Instagram from '../icons/instagram.svg';

const Footer = () => {

    const socialNetworks = [
        {id: 1, logo: LinkedIn, url: 'https://www.linkedin.com/'}, 
        {id: 2, logo: Facebook, url: 'https://www.facebook.com/'}, 
        {id: 3, logo: YouTube, url: 'https://www.youtube.com/'}, 
        {id: 4, logo: Telegram, url: 'https://web.telegram.org/'}, 
        {id: 5, logo: Instagram, url: 'https://www.instagram.com/'}, 
    ] 

    return (
        <FooterContainer>
            <Text>Ⓒ Powered by POWERCODE</Text>
            <SocialNetworks>
                {socialNetworks.map(network => (
                    <a 
                        href={network.url} 
                        target='_blank'
                    >
                        <SocialNetworkLogo 
                            key={network.id}
                            src={network.logo} 
                            alt=''
                        />
                    </a>
                ))}
            </SocialNetworks>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    width: 100%;
    padding: 0 150px;

    background: #173C5C;
`;

const Text = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 180.5%;

    color: #FFFFFF;
`;

const SocialNetworks = styled.div`
    display: flex;
    gap: 15px;  
`;

const SocialNetworkLogo = styled.img`
    height: 30px;
    width: 30px;
`;