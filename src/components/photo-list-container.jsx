import React, { Component } from 'react';
import api from '../api';
import Spinner from '../components/spinner';
import PhotoList from './photo-list';

class PhotoListContainer extends Component {
    state = {
        characters: []
    };

    async componentDidMount() {
        const { data } = await api.get('/character');

        this.setState({
            characters: data.results
        });
    }

    render() {
        const { characters } = this.state;
        return characters.length ? <PhotoList characters={characters} /> : <Spinner />;
    }
}

export default PhotoListContainer;
