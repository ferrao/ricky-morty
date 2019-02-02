import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCharacters } from '../redux/actions';
import api from '../api';
import Spinner from '../components/spinner';
import PhotoList from './photo-list';
import Scroller from './infinite-scroll';

class PhotoListContainer extends Component {
    state = {
        loading: false
    };

    componentDidMount() {
        if (!this.props.page) {
            this.fetchNewPage();
        }
    }

    fetchNewPage = async () => {
        try {
            this.setState({ loading: true });
            const { page, receiveCharacters } = this.props;
            const { data } = await api.get(`/character?page=${page + 1}`);

            // dispatch new characters to the store
            receiveCharacters(data.results);
        } catch (error) {
            console.log(error.message);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { characters } = this.props;
        const { loading } = this.state;

        return (
            <Scroller onScroll={this.fetchNewPage} offset={200}>
                <PhotoList characters={characters} />
                {loading && <Spinner />}
            </Scroller>
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
