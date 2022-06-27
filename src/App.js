import logo from "./logo.svg";
import "./App.css";
import CreditCardList from "./components/CreditCardList";

import React, { useState, useEffect } from "react";
import AddCreditCardComponent from "./components/AddCreditCardComponent";

function App() {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    getCreditCards();
  }, []);

  function getCreditCards() {
    fetch("http://localhost:8081/getAllCreditCards")
      .then((res) => res.json())
      .then((data) => {
        setCreditCards(data);
        console.log(data);
      });
  }

  const creditCardAddedHandlar = (addCreditCard) => {
    setCreditCards((prevState) => {
      return [addCreditCard, ...prevState];
    });
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <AddCreditCardComponent
        onAddCreditCardEntered={creditCardAddedHandlar}
      ></AddCreditCardComponent>

      <CreditCardList creditCards={creditCards}></CreditCardList>
    </div>
  );
}

export default App;
