import React from "react";

export default function DeckRemovalDialog({ deckTitle, removeDeck, cancelRemoval }) {
  return (
    <div className="mask">
      <div className="modal deck-dialog-box">
        <h3 className="deck-dialog-box-title">Are you sure you want to remove <b>{deckTitle}</b> deck?</h3>
        <div className="deck-dialog-box-btns">
          <button className="btn btn-danger" onClick={removeDeck}>Remove</button>
          <button className="btn btn-text" onClick={cancelRemoval}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
