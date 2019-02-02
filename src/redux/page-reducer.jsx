import { RECEIVE_CHARACTERS } from './actions';

const pageReducer = function(state = 0, action) {
    switch (action.type) {
        case RECEIVE_CHARACTERS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
