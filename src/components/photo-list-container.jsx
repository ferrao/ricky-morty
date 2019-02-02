import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCharacters } from '../redux/actions';
import api from '../api';
import Spinner from '../components/spinner';
import PhotoList from './photo-list';
import Scroller from './infinite-scroll';

class PhotoListContainer extends Component {
    componentDidMount() {
        if (!this.props.page) {
            this.fetchNewPage();
        }
    }

    fetchNewPage = async () => {
        try {
            const { page, receiveCharacters } = this.props;
            const { data } = await api.get(`/character?page=${page + 1}`);

            // dispatch new characters to the store
            receiveCharacters(data.results);
        } catch (error) {
            console.log(error.message);
        }
    };

    render() {
        const { characters } = this.props;

        return characters.length ? (
            <Scroller onScroll={this.fetchNewPage} offset={200}>
                <PhotoList characters={characters} />
            </Scroller>
        ) : (
            <Spinner />
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters,
    page: state.page
});

const mapDispatchToProps = dispatch => ({
    receiveCharacters: characters => dispatch(receiveCharacters(characters))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoListContainer);
