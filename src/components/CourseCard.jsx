import React from 'react';
import styled from 'styled-components';

import Button from './ui/Button';

const CourseCard = ({
    imageSrc,
    courseName,
    shortDescription,
    ...props
}) => {
    return (
        <CardContainer>
            <Picture src={imageSrc} alt=''/>
            <CourseName>
                {courseName}
            </CourseName>
            <ShortDescription>
                {shortDescription}
            </ShortDescription>
            <Button>
                Show more
            </Button>
        </CardContainer>
    );
}

export default CourseCard;

const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 0 0 25px;

    background: rgba(255, 255, 255, 0.38);
    backdrop-filter: blur(11px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    
    border-radius: 5px;
`;

const Picture = styled.img`
    height: 328px;
    width: 100%;
    margin-bottom: 25px;

    border: none;
    outline: none;
    overflow: hidden;
`;

const CourseName = styled.h4`
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: 700;
    line-height: 140%;

    color: #173C5C;  
`;

const ShortDescription = styled.p`
    margin-bottom: 28px;

    font-size: 16px;
    font-weight: 500;
    line-height: 140%;

    color: #173C5C;  
`;
