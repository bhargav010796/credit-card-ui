import React, { useState } from "react";

import "./AddCredit.css";

const CreditCardFormComponent = (props) => {
  const [editableName, setEditableName] = useState("");
  const [editableNumber, setEditableNumber] = useState("");
  const [editableLimit, setEditableLimit] = useState("");
  const [apiError, setAPIError] = useState(false);

  const editableNameHandler = (event) => {
    setEditableName(event.target.value);
  };
  const editableNumberHandler = (event) => {
    setEditableNumber(event.target.value);
  };
  const editableLimitHandler = (event) => {
    setEditableLimit(event.target.value);
  };

  const subimtCreditCardHandler = (event) => {
    event.preventDefault();

    const newCard = {
      name: editableName,
      cardNumber: editableNumber,
      cardLimit: editableLimit,
    };

    console.log(newCard);

    fetch("http://localhost:8081/addCreditCard/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          setAPIError(true);
        } else {
          props.onSaveDataAdded(data);
          setEditableName("");
          setEditableNumber("");
          setEditableLimit("");
          setAPIError(false);
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
        setAPIError(true);
      });
  };

  return (
    <React.Fragment>
      <h1 align="left"> Credit Card System</h1>
      <form onSubmit={subimtCreditCardHandler}>
        <div className="new-credit__controls">
          <div className="new-credit__control">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Card Holder Name"
              value={editableName}
              onChange={editableNameHandler}
              required
            />
          </div>

          <div className="new-credit__control">
            <label>Card Number</label>
            <input
              id="ccn"
              type="tel"
              inputMode="numeric"
              value={editableNumber}
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              onChange={editableNumberHandler}
              required
              maxLength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            ></input>
          </div>
          <div className="new-credit__control">
            <label>Limit</label>
            <input
              type="number"
              placeholder="Enter Card Limit"
              value={editableLimit}
              onChange={editableLimitHandler}
              required
            />
          </div>
          <div className="new-credit__control">
            <button type="submit">Add</button>
          </div>
          {apiError && <p className="error">Unknow Error Occured.</p>}
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreditCardFormComponent;
