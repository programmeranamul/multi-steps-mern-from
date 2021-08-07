import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import GenarelDetails from "./GenarelDetails";
import { initaleData } from "./InitailDataAndFunc";

const MultiForm = () => {
  const [states, setStates] = useState(initaleData);

  // process next stape
  const next = () => {
    const { stape } = states;
    setStates({ ...states, stape: stape + 1 });
  };

  // process previous stape
  const previous = () => {
    const { stape } = states;
    setStates({ ...states, stape: stape - 1 });
  };

  // handel filed change
  const handelChange = (e) => {
    if (e.target.type === "checkbox") {
      const namess = e?.target?.name;
      const found = states[namess].find(
        (element) => element === e.target.value
      );
      if (e.target.checked) {
        if (!found) {
          setStates({
            ...states,
            [e.target.name]: [...states[namess], e.target.value],
          });
        }
      } else {
        const filter = states[namess].filter((element) => element !== found);
        setStates({ ...states, [e.target.name]: filter });
      }

      console.log(states);

      return;
    }
    console.log("Change")
    setStates({ ...states, [e.target.name]: e.target.value });
  };
  console.log(states);

  const {
    step,
    generalDetails,
    firstName,
    lastName,
    dateOfBirth,
    residence,
    sex,
    heightInCm,
    lifestyle,
    weekSports,
    eatHealthy,
    meditate,
    drawer,
    smoke,
    likeDoAtWork,
    drink,
    listenInSpareTime,
  } = states;
  const value = {
    step,
    generalDetails,
    firstName,
    lastName,
    dateOfBirth,
    residence,
    sex,
    heightInCm,
    lifestyle,
    weekSports,
    eatHealthy,
    meditate,
    drawer,
    smoke,
    likeDoAtWork,
    drink,
    listenInSpareTime,
  };

  switch (step) {
    case 1:
      return (
        <GenarelDetails value={value} handelChange={handelChange} next={next} />
      );
    case 2:
      return <h1>This is step 2</h1>;
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
