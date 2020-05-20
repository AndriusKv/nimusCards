import React from "react";
import StudyScoreBar from "./StudyDeckScoreBar";

export default function StudyDeckHeader({ score, mode }) {
    return (
        <div className="study-score">
            {mode === "standard" ?
                <React.Fragment>
                    <div className="study-score-bar-name-container">
                        <span>Wrong</span>
                        <span>Right</span>
                    </div>
                    <div className="study-score-bar-container">
                        <StudyScoreBar score={score} name="wrong"/>
                        <StudyScoreBar score={score} name="right"/>
                    </div>
                </React.Fragment> :
                <div className="study-score-table">
                    <div className="study-score-table-cell">
                        <div className="study-score-table-cell-name">Level</div>
                        <div>Cards</div>
                    </div>
                    {score.levels.map((level, index) => (
                        <div className={`study-score-table-cell${score.currentLevel === index ? " active" : ""}`} key={index}>
                            <div className="study-score-table-cell-name">
                                {index === 4 ? "Learned" : index + 1}
                            </div>
                            <div>{level.length}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}