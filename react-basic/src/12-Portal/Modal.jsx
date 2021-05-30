import React, { Component } from "react";
import "./style.css";
import withPortal from "./withPortal";

@withPortal
class Modal extends Component {
  render() {
    return (
      <div className="portal">
        <h1>portal header</h1>
        <button>add</button>
      </div>
    );
  }
}

export default Modal;
