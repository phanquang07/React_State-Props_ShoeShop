import React, { Component } from "react";
import ProductsData from "./ProductsData";

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.productsData.map((product) => {
      // console.log("product: ", product);
      let { id } = product;
      return (
        <div className="col-4 py-2" key={`shoes-${id}`}>
          <ProductsData item={product} showDetail={this.props.setStateModal} />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">Shoes shop</h1>
        <div className="row">{this.renderProductList()}</div>
      </>
    );
  }
}
