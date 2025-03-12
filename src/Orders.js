/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { connect } from "react-redux";
import Header from "./Container/Header.js";

const Orders = ({ list }) => {
  return (
    <div>
      <Header />
      <center>
        {/* check the data length, if data in api > 0 , then only we can hydrate the data */}
        {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map(
                (
                  item //Hydrate the data in rows and then print in col
                ) => (
                  <div className="col-md-4" key={item.id}>
                    <div className="card mb-4">
                      <img
                        src={item.url}
                        className="card-image-top"
                        alt="image not found"
                        style={{ height:"250px"}}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">
                          Billing Amout : Rs.{item.prize}
                        </div>
                        <p>Table Number : {item.table_number}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="">
            <h4>No Order is Placed Yet</h4>
          </div>
        )}
      </center>
    </div>
  );
};
const mapStateToProps = (state) => ({
  list: state.orderreducer,
});
export default connect(mapStateToProps)(Orders);
