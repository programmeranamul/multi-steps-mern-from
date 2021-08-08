import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import GenarelDetails from "./GenarelDetails";
import { initaleData } from "./InitailDataAndFunc";
import StapeTwo from "./StapeTwo";
import StapeThree from "./StapeThree";

const MultiForm = () => {
  const [states, setStates] = useState(initaleData);
  const [showError, setShowError] = useState([]);
  const [requiredList, setRequiredList] = useState([]);
  const { step } = states;
  const value = states;

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


/////
const handelNext = () => {  
  const errorList = [];
  for (let i = 0; i < requiredList.length; i++) {
    const inputeName = requiredList[i].name;
    const inputValue = value[inputeName];
    if (inputValue.length < 1) {
      errorList.push(inputeName);
    }
  }
  if (errorList.length > 0) {
    setShowError(errorList);
  } else {
    next();
  }
};



  // handel filed change
  const handelChange = (e) => {
    const isRequired = requiredList.find(
      (required) => required.name === e.target.name
    );
    if (isRequired) {
      if (e.target.value) {
        const item = showError.find((err) => err === e.target.name);
        if (item) {
          const newError = showError.filter((err) => err !== item);
          setShowError(newError);
        }
      } else {
        const item = showError.find((err) => err === e.target.name);
        console.log(item, "g");
        if (!item) {
          setShowError([...showError, e.target.name]);
        }
      }
    }

    if (e.target.type === "checkbox") {
      const namess = e?.target?.name;

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
    setStates({ ...states, [e.target.name]: e.target.value });
  };

  console.log(requiredList)
 
  switch (step) {
    case 2:
      return (
        <GenarelDetails
          value={value}
          handelChange={handelChange}
          next={handelNext}
          showError={showError}
          setShowError={setShowError}
          requiredList={requiredList}
          setRequiredList={setRequiredList}
        />
      );
    case 1:
      return (
        <StapeTwo
          value={value}
          handelChange={handelChange}
          next={handelNext}
          previous={previous}
          showError={showError}
          setShowError={setShowError}
          requiredList={requiredList}
          setRequiredList={setRequiredList}
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
