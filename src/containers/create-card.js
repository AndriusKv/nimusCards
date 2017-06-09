import React from "react";
import Icon from "../components/icon";
import CardSide from "./create-card-side";

export default class CreateCardContainer extends React.Component {
    constructor(props) {
        super(props);

        props.card.visibleSide = "front";
        this.state = {
            card: props.card
        };
    }

    getOppositeSide(side) {
        return side === "front" ? "back" : "front";
    }

    switchSide = side => {
        const card = this.state.card;
        card.visibleSide = this.getOppositeSide(side);

        this.setState({ card });
    }

    render() {
        const { index, removeCard } = this.props;
        const side = this.state.card.visibleSide;
        const oppositeSide = this.getOppositeSide(side);

        return (
            <li className="create-list-item">
                <div className="create-card-header">
                    <div className="create-card-index">{index + 1}.</div>
                    <button type="button" className="btn-icon switch-side-btn"
                        title={`Switch to ${oppositeSide} side`}
                        onClick={() => this.switchSide(side)}>
                        <Icon name="switch" />
                    </button>
                    {this.props.cardCount > 1 && (
                        <button type="button" className="btn-icon" title="Remove card" onClick={() => removeCard(index)}>
                            <Icon name="remove" />
                        </button>
                    )}
                </div>
                <div className="create-card">
                    <CardSide
                        side="front"
                        oppositeSide="back"
                        card={this.state.card} />
                    <CardSide
                        side="back"
                        oppositeSide="front"
                        card={this.state.card} />
                </div>
            </li>
        );
    }
}