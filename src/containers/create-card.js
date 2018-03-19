import React from "react";
import Icon from "../components/icon";
import CardFront from "./create-card-front";
import CardBack from "./create-card-back";

export default class CreateCardContainer extends React.Component {
    constructor(props) {
        super(props);

        props.card.visibleSide = "front";
        this.state = {
            card: props.card
        };
    }

    flipSide = side => {
        const { card } = this.state;
        card.visibleSide = side === "front" ? "back" : "front";

        this.setState({ card });
    }

    handleInput = ({ target: { value } }, side) => {
        const { card } = this.state;

        if (value !== card[side].text) {
            card[side].text = value;
            this.setState({ card });
        }
    }

    handleTextSizeSelect = ({ target: { value } }, side) => {
        const { card } = this.state;

        card[side].textSize = value;
        this.setState({ card });
    }

    render() {
        const { index, removeCard } = this.props;
        const side = this.state.card.visibleSide;

        return (
            <li className="create-list-item">
                <div className="create-card-header">
                    <div className="create-card-index">{index + 1}.</div>
                    <button className="btn-icon side-flip-btn"
                        title="Flip side"
                        onClick={() => this.flipSide(side)}>
                        <Icon name="flip" />
                    </button>
                    {this.props.cardCount > 1 && (
                        <button className="btn-icon" title="Remove card" onClick={() => removeCard(index)}>
                            <Icon name="remove" />
                        </button>
                    )}
                </div>
                <div className="create-input-group">
                    <CardFront
                        card={this.state.card}
                        handleInput={this.handleInput}
                        handleTextSizeSelect={this.handleTextSizeSelect} />
                    <CardBack
                        card={this.state.card}
                        handleInput={this.handleInput}
                        handleTextSizeSelect={this.handleTextSizeSelect} />
                </div>
            </li>
        );
    }
}
