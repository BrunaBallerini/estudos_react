import { Component } from "react";

export class ButtonPage extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button
        className="button"
        onClick={onClick}>
        {text}
      </button>
    )
  }
} 