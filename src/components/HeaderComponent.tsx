import React, { useEffect, useState } from "react";
import "./HeaderComponent.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTools } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="header-container">
      <div className="header-text">
        <p>
          Hey, <strong>Festa Solar!</strong>
        </p>
        <h2>Thank you for your trust in ABSerp</h2>
        <div className="header-buttons">
          <div className="header-button">
            <FontAwesomeIcon icon={faShoppingCart} /> Place Order
          </div>
          <div className="header-button">
            <FontAwesomeIcon icon={faTools} /> Service Request
          </div>
        </div>
        <p className="header-time">{formatTime(time)}</p>
        <p className="header-date">{formatDate(time)}</p>
      </div>
      <img
        src="https://media.istockphoto.com/id/582256640/photo/oil-refinery-chemical-petrochemical-plant.jpg?s=612x612&w=0&k=20&c=BEdsHVe2vUfzRTb9KcsCS_tCH6_R_nKLKkOQCht8AKo="
        alt="Header Image"
        className="header-image"
      />
    </div>
  );
};

export default HeaderComponent;
