/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addorder, resetFilter, resetTableNumber } from "../Actions";
import "../data.json";

const Card = ({
  filter_name,
  addorder,
  table_number,
  resetTableNumber,
  resetFilter,
}) => {
  const [data, setData] = useState([]);
  const [cloneData, setCloneData] = useState([]); //store the incoming data in a cloneData Variable
  useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.items)
        setData(json.items);
        setCloneData(json.items); //fetch an api from db and then convert to json and that json can be stored in data by setdata is used to reset the data
      });
  }, []);

  //For Filtering the data
  useEffect(() => {
    if (filter_name !== "All Items") {
      let specific = cloneData.filter((item) => item.category === filter_name); // for each and every item , we have an category object to filter, that category is equals to the filter_name declared in reducers
      setData(specific); //if you select pizza as fulter_name that Pizza Data only be shown and that data assigned to setData Var
    } else {
      setData(cloneData); //clone data having full data
    }
  }, [filter_name]);

  //Creating a handler Function for onclick
  const Handler = async (id, name, prize, url) => {
    if (table_number !== null) {
      await addorder(id, name, prize, table_number, url); //when we click the button onCLick fun, we can send these datail to dispatch events (addorder)
      //once we select the filter and order next time reset the tablenumber and filter
      await resetTableNumber(); 	// Call resetTableNumber as a function
      await resetFilter(); 			// Call resetFilter as a function
      alert("Order Placed Successfully");
    } else {
      alert("Please select the Table Number");
    }
  };

  return (
    <>
      <center>
        {/* check the data length, if data in api > 0 , then only we can hydrate the data */}
        {data.length > 0 ? (
          <div className="container">
            <div className="row">
              {data.map(
                (
                  item //Hydrate the data in rows and then print in col
                ) => (
                  <div className="col-md-4" key={item.id}>
                    <div className="card mb-4">
                      <img
                        src={item.url}
                        className="card-image-top"
                        alt="image not found"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Rs.{item.prize}</div>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            Handler(item.id, item.name, item.prize, item.url)
                          }
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </center>
    </>
  );
};
const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
  table_number: state.tablereducer.table_number,
});
export default connect(mapStateToProps, {
  addorder,
  resetFilter,
  resetTableNumber,
})(Card);
