import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardImg } from 'reactstrap';

const styles = {
    maxWidth: 800,
    backgroundColor: '#333',
    borderColor: '#333',
    margin: 100
};

const PhotoDetails = ({ character, match }) => (
    <Container>
        <Link to="/">
            <Card key={character.id} inverse style={styles}>
                <CardImg width="100%" src={character.image} alt={character.name} />
            </Card>
        </Link>
    </Container>
);

export default PhotoDetails;
