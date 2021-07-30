import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from 'react-stripe-checkout';

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });
  function handleToken(token, addresses) {
    console.log({ token, addresses })
  }
  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout 
        stripeKey="pk_test_51I7QO7KYANoboI2AHEriZpNubwKWYeRO65e949sxZJ9iNsKYSed2yQ2BnAAaUPm5EfVLz2yUQy5nSy6A20HJBRd200vWQUr0Dp"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={product.price * 100}
        name={product.name}
        />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
