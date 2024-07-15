import React from "react";
import "./ButtonBarComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faHistory,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const ButtonBarComponent: React.FC = () => {
  return (
    <div className="button-bar">
      <button className="bar-button">
        <FontAwesomeIcon className="icon" icon={faBox} /> <p>Orders</p>
      </button>
      <button className="bar-button">
        <FontAwesomeIcon className="icon" icon={faHistory} />{" "}
        <p>Service History</p>
      </button>
      <button className="bar-button">
        <FontAwesomeIcon className="icon" icon={faLocationArrow} />{" "}
        <p>Tracking</p>
      </button>
    </div>
  );
};

export default ButtonBarComponent;
