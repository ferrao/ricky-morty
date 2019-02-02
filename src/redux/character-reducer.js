import { RECEIVE_CHARACTERS } from './actions';

const characterReducer = function(state = [], action) {
    switch (action.type) {
        case RECEIVE_CHARACTERS:
            return [
                // characters already in redux store
                ...state,

                // new characters, making sure we remove duplicates
                ...action.characters.filter(newCharacter => !state.find(character => character.id === newCharacter.id))
            ];
        default:
            return state;
    }
};

export default characterReducer;
