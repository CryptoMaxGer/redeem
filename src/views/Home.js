import React, { Component } from "react";
import "./Home.css";
import Button from "../Components/Button/Button";
import QuantityBox from "../Components/QuantityBox/QuantityBox";

export default class Home extends Component {
  render() {
    return (
      <div className="homeBox">
        <QuantityBox btcAmount={1.67} />
        <Button href="https://coinsenders.com" buttonName={"Buy More"} />
        <Button buttonName={"Withdrawal"} />
      </div>
    );
  }
}
