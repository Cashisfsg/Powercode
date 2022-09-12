import React from 'react';
import styled from 'styled-components';

import CourseCard from '../components/CourseCard';
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
        <Wrapper>
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

        </Wrapper>
    );
}

export default Courses;

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;  

    padding: 0 150px;
`;

const CoursesContainer = styled.div`
    width: 100%;
    display: grid;
    
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);
`;
