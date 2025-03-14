/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Api = () => {
  const [items, setItems] = useState(
    {
      category: "Pizza",
      id: "19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
      name: "American Cheesy Pizza",
      prize: 300,
      url: "http://docs.google.com/uc?export=open&id=19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
    },
    {
      category: "Pizza",
      id: "1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
      name: "Bacon Pizza",
      prize: 450,
      url: "http://docs.google.com/uc?export=open&id=1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
    },
    {
      category: "Pizza",
      id: "1ARbwqW_uOLb4eCeWsyCJVZSYUIreXsrD",
      name: "Double Cheese Pizza",
      prize: 500,
      url: "http://docs.google.com/uc?export=open&id=1ARbwqW_uOLb4eCeWsyCJVZSYUIreXsrD",
    },
    {
      category: "Pizza",
      id: "1a5kM2bkvvvG9x12V_KkuZ1HRor2xgU20",
      name: "Italian Cheesy Pizza",
      prize: 450,
      url: "http://docs.google.com/uc?export=open&id=1a5kM2bkvvvG9x12V_KkuZ1HRor2xgU20",
    },
    {
      category: "Pizza",
      id: "12fiRkYTdFZWr3qaczRBUu-c6ciQ1FY2V",
      name: "Keema Pizza",
      prize: 350,
      url: "http://docs.google.com/uc?export=open&id=12fiRkYTdFZWr3qaczRBUu-c6ciQ1FY2V",
    },
    {
      category: "Pizza",
      id: "1RtJQB2pxhHWFGSH2vdOJxgSI4b1vEdTm",
      name: "Non Veg Pizza",
      prize: 500,
      url: "http://docs.google.com/uc?export=open&id=1RtJQB2pxhHWFGSH2vdOJxgSI4b1vEdTm",
    },
    {
      category: "Pizza",
      id: "1gWKqlaXkO7h-w3--WygpgUPy28a21QHp",
      name: "Olives Pizza",
      prize: 200,
      url: "http://docs.google.com/uc?export=open&id=1gWKqlaXkO7h-w3--WygpgUPy28a21QHp",
    },
    {
      category: "Pizza",
      id: "1hUGxEC95jEwnlXVh08isFuoxivT5-HwB",
      name: "Onion Pizza",
      prize: 250,
      url: "http://docs.google.com/uc?export=open&id=1hUGxEC95jEwnlXVh08isFuoxivT5-HwB",
    },
    {
      category: "Pizza",
      id: "1u8NjRiICc3J4U9WBgarM7gFvkyTEOtz-",
      name: "Oven Pizza",
      prize: 300,
      url: "http://docs.google.com/uc?export=open&id=1u8NjRiICc3J4U9WBgarM7gFvkyTEOtz-",
    }
  );
  fetch(
    "https://restaurentproject-3559b-default-rtdb.firebaseio.com/items.json",
    {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((res) => alert("data posted"))
    .catch((err) => console.log(err));
  return <div>Api</div>;
};

export default Api;
