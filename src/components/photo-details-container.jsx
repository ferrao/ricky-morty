import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../api';
import Spinner from '../components/spinner';
import PhotoDetails from './photo-details';

class PhotoListContainer extends Component {
    state = {
        character: undefined
    };
    async componentDidMount() {
        const { params } = this.props.match;
        const { data } = await api.get(`/character/${params.id}`);

        this.setState({
            character: data
        });
    }

    render() {
        const { character } = this.state;
        return character ? <PhotoDetails character={character} /> : <Spinner />;
    }
}

export default withRouter(PhotoListContainer);
