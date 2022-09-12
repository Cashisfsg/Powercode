import React from 'react';
import styled from 'styled-components';

const BenefitCard = ({
    number,
    imageSrc,
    title,
    description,
    ...props
}) => {
    return (
        <CardContainer number={number}>
            <CardWrapper>
                <Picture src={imageSrc} alt=''/>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </CardWrapper>
        </CardContainer>
    );
}

export default BenefitCard;

const CardContainer = styled.section`
    display: flex;
    justify-content: ${({number}) => number % 2 ? 'flex-end' : 'flex-start'};

    width: 100%;
    padding: 18px 115px;

    background: rgba(255, 255, 255, 0.38);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(11px);

    border-radius: 2px;
`;

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Picture = styled.img`
    height: 74px;
    width: 74px;

    margin-bottom: 15px;
`;

const Title = styled.h4`
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: 700;
    line-height: 140%;

    color: #173C5C;
`;

const Description = styled.p`
    width: 356px;

    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    
    color: #173C5C;  
`;


