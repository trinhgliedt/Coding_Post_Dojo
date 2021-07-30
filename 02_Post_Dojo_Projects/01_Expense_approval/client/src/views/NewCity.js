import React, { useState } from "react";
import { navigate } from "@reach/router";

import axios from "axios";

const NewCity = (props) => {
  // console.log(props);
  // useState returns an array of two items:
  // [stateVar, funcToUpdateStateVar]
  // destructure the two arr items into the two var names [name, setName]
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const newCity = {
      // long-form prop assignment
      name: name,
      // shorthand prop assignment when key name and var name are same
      population,
      imgUrl,
    };

    console.log(newCity);

    axios
      .post("http://localhost:8000/api/cities", newCity)
      // response from our server
      .then((res) => {
        console.log(res);
        navigate("/cities");
      })
      .catch((err) => {
        // for validation errors to be sent here, the .catch in the controller method needs:
        // res.status(400).json(err);
        setErrors(err.response.data.errors);
        console.error(err.response);
      });
  }

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Name: </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
          {errors?.name && (
            <span className="text-danger">{errors.name?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Population: </label>
          <input
            onChange={(event) => {
              setPopulation(event.target.value);
            }}
            type="number"
            min="0"
            className="form-control"
          />
          {errors?.population && (
            <span className="text-danger">{errors.population?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>ImgUrl: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            className="form-control"
          />
          {errors?.imgUrl && (
            <span className="text-danger">{errors.imgUrl?.message}</span>
          )}
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default NewCity;
