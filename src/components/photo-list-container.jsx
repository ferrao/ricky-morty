import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCharacters } from '../redux/actions';
import api from '../api';
import Spinner from '../components/spinner';
import PhotoList from './photo-list';

class PhotoListContainer extends Component {
    async componentDidMount() {
        const { data } = await api.get('/character');
        this.props.receiveCharacters(data.results);
    }

    render() {
        const { characters } = this.props;
        return characters.length ? <PhotoList characters={characters} /> : <Spinner />;
    }
}

const mapStateToProps = state => ({
    characters: state
});

const mapDispatchToProps = dispatch => ({
    receiveCharacters: characters => dispatch(receiveCharacters(characters))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoListContainer);
