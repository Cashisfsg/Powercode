import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 32px;

    @media (max-width: 359px) {
        padding: 0 16px;
    }
`;

export default Container;