import styled from 'styled-components';

const Button = styled.button`
    padding: 12px;

    color: #173C5C;
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;

    border: none;
    outline: 1px solid #173C5C;
    border-radius: 4px;

    cursor: pointer;

    :hover {
        color: #FFFFFF;
        background: #43A7FF;
        outline: none;
    }
`;

export default Button;