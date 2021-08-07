import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import GenarelDetails from "./GenarelDetails";
import { initaleData } from "./InitailDataAndFunc";
import StapeTwo from "./StapeTwo";
import StapeThree from './StapeThree';

const MultiForm = () => {
  const [states, setStates] = useState(initaleData);

  // process next stape
  const next = () => {
    const { step } = states;
    setStates({ ...states, step: step + 1 });
  };

  // process previous stape
  const previous = () => {
    const { step } = states;
    setStates({ ...states, step: step - 1 });
  };

  // handel filed change
  const handelChange = (e) => {
    if (e.target.type === "checkbox") {
      const namess = e?.target?.name;
      // const found = states[namess].find(
      //   (element) => element === e.target.value
      // );
      console.log(namess);
      if (e.target.checked) {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        if (!found) {
          setStates({
            ...states,
            [e.target.name]: [...states[namess], e.target.value],
          });
        }
      } else {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        const filter = states[namess].filter((element) => element !== found);
        setStates({ ...states, [e.target.name]: filter });
      }

      console.log(states);

      return;
    }
    console.log("Change");
    setStates({ ...states, [e.target.name]: e.target.value });
  };
  console.log(states);


  const { step } = states;
  const value = states;
  switch (step) {
    case 1:
      return (
        <GenarelDetails value={value} handelChange={handelChange} next={next} />
      );
    case 2:
      return (
        <StapeTwo
          value={value}
          handelChange={handelChange}
          next={next}
          previous={previous}
        />
      );
      case 3:
        return (
          <StapeThree 
            value={value}
            handelChange={handelChange}
            next={next}
            previous={previous}
          />
        );
    default:
      break;
  }

  return (
    <div>
      <Alert variant="danger">
        Something went wrong. Please Refresh this page
      </Alert>
    </div>
  );
};

export default MultiForm;
