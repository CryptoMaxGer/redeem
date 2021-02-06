import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BuyButton.css";

export default class BuyButton extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        <Link to={this.props.href ? this.props.href : null}>
          {this.props.label ? this.props.label : this.props.buttonName}
        </Link>
      </button>
    );
  }
}
