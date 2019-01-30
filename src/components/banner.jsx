import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const Banner = () => (
    <Wrapper>
        <img src="/images/banner.jpg" alt="banner"/>;
    </Wrapper>
);

export default Banner;
