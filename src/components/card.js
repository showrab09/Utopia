import React from "react";
import { Button } from 'react-bootstrap';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards mx-auto w-75">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price} Rs</p>
        <Button onClick={() => handleClick(item)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
