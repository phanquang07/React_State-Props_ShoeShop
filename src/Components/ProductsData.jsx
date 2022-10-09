import React, { Component } from "react";

export default class ProductsData extends Component {
  render() {
    let { item, showDetail } = this.props;
    let { image, name, price } = item;
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-dark"
            onClick={() => {
              showDetail(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
