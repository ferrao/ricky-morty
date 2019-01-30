import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { selectCharacter } from '../redux/selectors';
import PhotoDetails from './photo-details';

const PhotoDetailsContainer = ({ character }) =>
    character ? <PhotoDetails character={character} /> : <Redirect to="/" />;

const mapStateToProps = (state, ownProps) => ({
    character: selectCharacter(state, Number.parseInt(ownProps.match.params.id))
});

export default connect(mapStateToProps)(withRouter(PhotoDetailsContainer));
