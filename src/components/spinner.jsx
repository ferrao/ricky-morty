import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Create the keyframes
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

// component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    img {
        width: 100px;
        height: 100px;
    }
    overflow: hiidden;
`;

const Spinner = () => (
    <Wrapper>
        <Rotate>
            <img src="images/spinner.png" alt="spinner" />
        </Rotate>
    </Wrapper>
);

export default Spinner;
