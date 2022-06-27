import React, { useEffect, useState } from "react";

const CreditCardList = (props) => {
  return (
    <div className="container">
      <h3 align="left"> Existing Cards</h3>

      <table border="1" cellPadding="0" cellSpacing="0" width="100%">
        <thead style={{ backgroundColor: "#E7E9EB" }}>
          <tr key="header">
            <td>Name</td>
            <td>Card Number</td>
            <td>Balance</td>
            <td>Limit</td>
          </tr>
        </thead>
        <tbody>
          {props.creditCards.map((creditCard, index) => (
            <tr key={index}>
              <td> {creditCard.name}</td>
              <td> {creditCard.cardNumber}</td>
              <td>
                <span>&#163;</span> {creditCard.balance}
              </td>
              <td>
                <span>&#163;</span> {creditCard.cardLimit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditCardList;
