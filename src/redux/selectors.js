export const selectCharacter = (state, id) => state.find(character => character.id === id);
