import React from 'react';
import styled from 'styled-components';

import CourseCard from '../components/CourseCard';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';

import Course1 from '../images/course_1.jpg';
import Course2 from '../images/course_2.jpg';
import Course3 from '../images/course_3.jpg';
import Course4 from '../images/course_4.jpg';


const Courses = () => {

    const courses = [
        {id: 1, img: Course1, name: 'Front end base', description: 'Lorem Ipsum, Dolor Sit Amet'},
        {id: 2, img: Course2, name: 'Front end base', description: 'Lorem Ipsum, Dolor Sit Amet'},
        {id: 3, img: Course3, name: 'Front end base', description: 'Lorem Ipsum, Dolor Sit Amet'},
        {id: 4, img: Course4, name: 'Front end base', description: 'Lorem Ipsum, Dolor Sit Amet'}
    ]

    return (
        <CoursesWrapper>
            <Container>
                <Title>Доступные курсы</Title>
                <CoursesContainer>
                    {courses.map(course => (
                        <CourseCard 
                            key={course.id}
                            imageSrc={course?.img}
                            courseName={course?.name}
                            shortDescription={course?.description}
                        />
                    ))}
                </CoursesContainer>
            </Container>
        </CoursesWrapper>
    );
}

export default Courses;

const CoursesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center; 

    margin-bottom: 50px;
`;

const CoursesContainer = styled.div`
    width: 100%;
    display: grid;
    
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;
