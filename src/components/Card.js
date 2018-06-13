import React from "react";

const Card = ({ image, title, onClick, info }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        <span className="card-title">{title}</span>
        <a
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={onClick}
        >
          <i className="fa fa-plus material-icons" />
        </a>
      </div>
      <div className="card-content">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Card;
