import React from "react";
import "./Category.css";

import {
  vegetables,
  medicine,
  baby,
  beauty,
  office,
  Gardening
} from "../../assets/index.js";

const Category = () => {
  return (
    <div className="category">
      <h2 className="title">Category</h2>
      <div className="con-item">
        <div className="item">
        <img src={office} alt="office" className="category-image"/>
        <h3>Stationary</h3>
      </div>
      <div className="item">
        <img src={medicine} alt="office" className="category-image"/>
        <h3>Stationary</h3>
      </div>
      <div className="item">
        <img src={beauty} alt="office" className="category-image"/>
        <h3>Stationary</h3>
      </div>
      <div className="item">
        <img src={vegetables} alt="office" className="category-image"/>
        <h3>Stationary</h3>
      </div>
      <div className="item">
        <img src={baby} alt="Gardening" className="category-image"/>
        <h3>Gardening</h3>
      </div>
      <div className="item">
        <img src={Gardening} alt="Gardening" className="category-image"/>
        <h3>Gardening</h3>
      </div>
      </div>
    </div>
  );
};

export default Category;
