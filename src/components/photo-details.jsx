import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImageCard from '../styles/image-card';
import { SAN_JUAN, REGAL_BLUE } from '../styles/colors';
import moment from 'moment';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, ${REGAL_BLUE}, ${SAN_JUAN});
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PhotoDetails = ({ character, match }) => (
    <Wrapper>
        <Link to="/">
            <ImageCard large shadow src={character.image} header={character.name}>
                {`${character.species} : ${character.status}`}
                <br />
                {`Location: ${character.location.name}`}
                <br />
                {`Date of Birth: ${moment(character.created).format('MMM Do YYYY')}`}
            </ImageCard>
        </Link>
    </Wrapper>
);

export default PhotoDetails;
