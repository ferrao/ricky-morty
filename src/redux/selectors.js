export const selectCharacter = (state, id) => state.characters.find(character => character.id === id);
