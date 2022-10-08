import React, { Component } from "react";
import ProductsData from "./ProductsData";

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.arrShoes.map((shoes) => {
      console.log("shoes: ", shoes);
      let { id } = shoes;
      return (
        <div className="col-4 py-2" key={`shoes-${id}`}>
          <ProductsData shoes={shoes} />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">Shoes shop</h1>
        <div className="row">{this.renderProductList()}</div>;
      </>
    );
  }
}
