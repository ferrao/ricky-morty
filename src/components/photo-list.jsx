import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Container,
    Card,
    CardColumns,
    CardBlock,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';
import Banner from './banner';

const styles = {
    maxWidth: 300,
    backgroundColor: '#333',
    borderColor: '#333',
    margin: 50
};

const PhotoList = ({ characters, match }) => (
    <Container fluid>
        <Banner />
        <CardColumns>
            {characters.map(character => (
                <Link to={`${match.url}/${character.id}`}>
                    <Card key={character.id} inverse style={styles}>
                        <CardImg width="100%" src={character.image} alt={character.name} />
                        <CardBlock>
                            <CardTitle>Name: {character.name}</CardTitle>
                            <CardSubtitle>Species: {character.species}</CardSubtitle>
                            <CardText>Status: {character.status}</CardText>
                        </CardBlock>
                    </Card>
                </Link>
            ))}
        </CardColumns>
    </Container>
);

export default withRouter(PhotoList);
