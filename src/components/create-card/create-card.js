import React from "react";
import Icon from "../icon";
import CardFront from "./create-card-front";
import CardBack from "./create-card-back";

export default class CreateCard extends React.Component {
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
                <div className="create-card-index">{index + 1}.</div>
                <div className="create-input-group create-card">
                    <CardFront
                        card={this.state.card}
                        handleInput={this.handleInput}
                        handleTextSizeSelect={this.handleTextSizeSelect} />
                    <CardBack
                        card={this.state.card}
                        handleInput={this.handleInput}
                        handleTextSizeSelect={this.handleTextSizeSelect} />
                </div>
                <div className="create-card-btns">
                    <button className="btn-icon create-card-flip-btn"
                        onClick={() => this.flipSide(side)}>
                        <Icon name="flip" />
                    </button>
                    <button className="btn-icon"
                        title="Remove card"
                        onClick={() => removeCard(index)}>
                        <Icon name="remove" />
                    </button>
                </div>
            </li>
        );
    }
}
