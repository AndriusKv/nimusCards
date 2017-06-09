import React from "react";
import CardSide from "./study-card-side";
import StudySetHeader from "./study-set-header";

export default function StudySet({ card, cardCount, score, mode, revealBack, getNextCard, getSideElement }) {
    function renderFooterBtns() {
        return card.back ? (
            <div>
                <button className="btn btn-danger study-footer-btn"
                    onClick={() => getNextCard(0)}>I Was Wrong</button>
                <button className="btn btn-success study-footer-btn"
                    onClick={() => getNextCard(1)}>I Got It Right</button>
            </div>) :
            <button className="btn" onClick={revealBack}>Reveal</button>;
    }

    return (
        <div className="study-container">
            <StudySetHeader score={score} mode={mode} />
            <div className="study-card">
                <CardSide side="front" card={card} getSideElement={getSideElement} />
                <CardSide side="back" card={card} getSideElement={getSideElement} revealBack={revealBack} />
            </div>
            <div className="container-footer study-footer">
                <span className="study-progress">Progress: {card.index + 1}/{cardCount}</span>
                {renderFooterBtns()}
            </div>
        </div>
    );
}