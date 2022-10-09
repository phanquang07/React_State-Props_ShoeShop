import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <h3 className="text-center">{content.name}</h3>
                <div className="d-flex justify-content-center">
                  <img
                    style={{ maxWidth: "70%" }}
                    src={content.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Alias:</strong></td>
                    <td>{content.alias}</td>
                  </tr>
                  <tr>
                    <td><strong>Price:</strong></td>
                    <td>${content.price}</td>
                  </tr>
                  <tr>
                    <td><strong>Description:</strong></td>
                    <td>{content.description}</td>
                  </tr>
                  <tr>
                    <td><strong>Quantity:</strong></td>
                    <td>{content.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
