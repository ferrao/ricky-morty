import React from 'react';
import styled from 'styled-components';
import { rgba, WHITE, BLACK } from './colors';

const Header = styled.div`
    position: absolute;
    width: 100%;
    color: ${WHITE};
    background: transparent;
    padding: 1em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 24px;
    top: 0;
    left: 0;
`;

const Data = styled.div`
    position: absolute;
    width: 100%;
    color: ${WHITE};
    background: ${rgba(BLACK, 0.3)};
    padding: 1em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    bottom: 0;
    left: 0;
`;

const ImageCard = styled.div.attrs(({ src }) => ({
    style: {
        // required to prevent different class name on each image card
        backgroundImage: `url(${src})`
    }
}))`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: ${({ large }) => (large ? '600px' : '200px')};
    padding: 0 1.7rem;
    margin: 20px;
    background-color: ${WHITE};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: ${({ shadow }) =>
        shadow ? `0 19px 38px ${rgba(BLACK, 0.3)}, 0 15px 12px ${rgba(BLACK, 0.2)}` : 'none'};
    border-radius: ${({ large }) => (large ? '0' : '5%')};

    img {
        visibility: hidden;

        min-width: ${({ large }) => (large ? '600px' : '200px')};
        max-height: ${({ large }) => (large ? '800px' : '200px')};
    }
`;

export default ({ src, large, shadow, header, children }) => (
    <ImageCard src={src} large={large} shadow={shadow}>
        <img src={src} alt="card" />
        {header && <Header>{header}</Header>}
        {children && <Data>{children}}</Data>}
    </ImageCard>
);
