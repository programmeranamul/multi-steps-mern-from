import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { questionForRelationDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import Button from "@material-ui/core/Button";

const StapeTwo = ({ value, handelChange, next, previous }) => {
  return (
    <>
      <FormHeader />
      <div className="mb-5">
        {questionForRelationDataList.map((datas) => (
          <div
            className="col-md-9 p-4 form__header bg-white mx-auto mt-3"
            key={datas.label}
          >
            <p className="mb-0">
              {datas.label}{" "}
              {datas.require ? <span className="text-danger">*</span> : ""}
            </p>
            {datas.input && datas.input.type === "text" ? (
              <div>
                <TextField
                  id="standard-error-helper-text"
                  label="Error"
                  helperText="Incorrect entry."
                  className="w-50"
                  name={datas.name}
                  value={value[datas.name]}
                  onChange={handelChange}
                />
              </div>
            ) : datas?.input?.type === "date" ? (
              <TextField
                id="date"
                label="Birthday"
                type="date"
                name={datas.name}
                value={value[datas.name]}
                onChange={handelChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            ) : datas?.input?.type === "radio" ? (
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  onChange={handelChange}
                  name={datas.name}
                  defaultValue={value[datas.name]}
                >
                  {datas?.input?.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : datas?.input?.type === "checkbox" ? (
              <FormGroup>
                {datas?.input?.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={value[datas.name].find((op) => op === option)}
                        value={option}
                        onChange={handelChange}
                        name={datas?.name}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            ) : null}
          </div>
        ))}
        <div className="mx-auto col-md-9 mt-3 d-flex">
          <Button
            className="bg-white d-inline-block me-3 custom-color fw-bold fs-12"
            variant="outlined"
            onClick={previous}
          >
            Previous
          </Button>
          <Button
            className="bg-white d-inline-block custom-color fw-bold fs-12"
            variant="outlined"
            onClick={next}
          >
            Next
          </Button>

          <div className="btn btn-custom ms-auto d-inline-block">
            Clear Form
          </div>
        </div>
      </div>
    </>
  );
};

export default StapeTwo;
