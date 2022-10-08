import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductsList extends Component {
  renderShoes = () => {
    return this.props.arrayShoes.map((shoes) => {
      let { id } = shoes;
      return (
        <div className="col-4 mt-3" key={`shoes-${id}`}>
          <ProductItem shoes={shoes} />
        </div>
      );
    });
  };

  render() {
    // console.log(this.props);
    return <div className="row">{this.renderShoes()}</div>;
  }
}
