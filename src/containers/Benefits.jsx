import React from 'react';
import styled from 'styled-components';

import BenefitCard from '../components/BenefitCard';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';

import Benefit1 from '../images/benefit_1.svg';
import Benefit2 from '../images/benefit_2.svg';
import Benefit3 from '../images/benefit_3.svg';
import Benefit4 from '../images/benefit_4.svg';

const Benefits = () => {

    const benefits = [
        {id: 1, img: Benefit1, title: 'Современный подход', description: 'Мы используем только современные технологии и инструменты'},
        {id: 2, img: Benefit2, title: 'Карьерный рост', description: 'Знания которые позволят расти по карьерной лестнице'},
        {id: 3, img: Benefit3, title: 'Реальный опыт', description: 'Опыт, который поможет на собеседованиях'},
        {id: 4, img: Benefit4, title: 'Авторские программы', description: 'Программы от практикующих преподавателей'},
    ]

    return (
        <BenefitsWrapper>
            <Container>
                <Title>Преимущества</Title>
                <BenefitsContainer>
                    {benefits.map(benefit => (
                        <BenefitCard 
                            key={benefit.id}
                            imageSrc={benefit?.img}
                            title={benefit?.title}
                            description={benefit?.description}
                        />
                    ))}
                </BenefitsContainer>
            </Container>
        </BenefitsWrapper>
    );
}

export default Benefits;

const BenefitsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 80px;
`;

const BenefitsContainer = styled.div`
    display: grid;
    width: 100%;
    
    place-items: left;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;
