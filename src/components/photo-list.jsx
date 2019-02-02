import React from 'react';
import styled from 'styled-components';
import Animation from './animation';
import { Link, withRouter } from 'react-router-dom';
import { BLACK } from '../styles/colors';
import ImageCard from '../styles/image-card';

import Banner from './banner';

const Wrapper = styled.div`
    padding: 100px;
    background-color: ${BLACK};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const PhotoList = ({ characters, match }) => (
    <Wrapper>
        <Banner />
        {characters.map(character => (
            <Link key={character.id} to={`${match.url}/${character.id}`}>
                <Animation>
                    <ImageCard src={character.image} />
                </Animation>
            </Link>
        ))}
    </Wrapper>
);

export default withRouter(PhotoList);
