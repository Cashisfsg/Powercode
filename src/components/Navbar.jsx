import React from 'react';
import styled from 'styled-components';

import Container from './ui/Container';

import Logo from '../icons/logo.png';

const Navbar = () => {
    return (
        <NavigationWrapper>
            <Container>
                <NavigationContainer>       
                    <Logotype />
                    <Navigation>
                        <Link>Войти</Link>
                        <Link>Выйти</Link>
                    </Navigation>
                </NavigationContainer>
            </Container>
        </NavigationWrapper>

    );
}

export default Navbar;

const NavigationWrapper = styled.div`
    height: 100px;
    width: 100%;

    background: rgba(255, 255, 255, 0.38);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(11px);

    border-radius: 0px;
`;

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`;

const Logotype = styled.img.attrs({
    src: Logo,
    alt: ''
})`
    height: 56px;
    width: 182px;
`;

const Navigation = styled.nav`
    display: flex;
    gap: 25px;
`;

const Link = styled.a`
    padding: 10px 9px;

    outline: 1px solid #173C5C;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    color: #173C5C;

    cursor: pointer;

    :hover {
        background: #43A7FF;
        outline: none;
        color: #FFFFFF;
    }
`;

