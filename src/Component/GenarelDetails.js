import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { genaredDataList } from "./QueryData";

const GenarelDetails = ({ value, handelChange, next }) => {
  return (
    <>
      {genaredDataList.map((datas) => (
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
                  control={
                    <Checkbox
                      // checked={gilad}
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
    </>
  );
};

export default GenarelDetails;
