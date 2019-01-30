import { RECEIVE_CHARACTERS } from './actions';

const characterReducer = function(state = [], action) {
    switch (action.type) {
        case RECEIVE_CHARACTERS:
            return action.characters;
        default:
            return state;
    }
};

export default characterReducer;
