import React, { createContext, useContext, useReducer, useMemo } from "react";

const CreateDeckContext = createContext(null);

function CreateDeckProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CreateDeckContext.Provider value={value}>
      {children}
    </CreateDeckContext.Provider>
  );
}

function useStore() {
  return useContext(CreateDeckContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "RESET_DECK":
      return { ...action.deck };
    case "UPDATE_DECK":
      return { ...state, [action.name]: action.value };
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.card] };
    case "REMOVE_CARD":
      state.cards.splice(action.index, 1);
      return { ...state };
    case "UPDATE_CARD_VALUE":
      state.cards[action.index][action.name][action.key] = action.value;
      return { ...state };
    case "ADD_ATTACHMENT":
      state.cards[action.index].front.attachment = action.attachment;
      return { ...state };
    case "REMOVE_ATTACHMENT":
      delete state.cards[action.index].front.attachment;
      return { ...state };
    case "UPDATE_CARD_BACK":
      const card = state.cards[action.index];
      card.back = { ...card.back, ...action.payload };
      return { ...state };
    default:
      return state;
  }
}

export {
  CreateDeckProvider,
  useStore
};
