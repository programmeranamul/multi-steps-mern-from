import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { stapeThreeDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormSubHeader } from "./FormSubHeader";

const StapeThree = ({
  value,
  handelChange,
  previous,
  showError,
  setRequiredList,
  handelSubmit,
}) => {
  useEffect(() => {
    const reqiureds = stapeThreeDataList.filter((datas) => datas.require);
    setRequiredList(reqiureds);
  }, []);

  return (
    <>
      <FormHeader />
      <FormSubHeader />
      <div className="mb-5">
        {stapeThreeDataList.map((datas) => (
          <div
            className={`col-md-8 p-4 form__header bg-white mx-auto mt-3 ${
              showError.find((err) => err === datas.name) && "border-red"
            }`}
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
                  label="Your Answer"
                  helperText={
                    showError.find((err) => err === datas.name) &&
                    "This filed is required"
                  }
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
              <FormControl component="fieldset" className="mt-3 w-100">
                <RadioGroup
                  aria-label="gender"
                  onChange={handelChange}
                  name={datas.name}
                  defaultValue={value[datas.name]}
                  className={`${
                    datas.verticale
                      ? "flex-row align-items-end justify-content-around"
                      : ""
                  }`}
                >
                  {datas.sideOption1 && (
                    <p className="mb-0 small pb-2">{datas.sideOption1}</p>
                  )}
                  <div>
                    {datas?.input?.options.map((option) =>
                      datas.verticale ? (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                          labelPlacement="top"
                          className="control-row"
                        />
                      ) : (
                        <div>
                          <FormControlLabel
                            key={option}
                            value={option}
                            control={<Radio />}
                            label={option}
                          />
                        </div>
                      )
                    )}
                  </div>
                  {datas.sideOption2 && (
                    <p className="mb-0 small pb-2">{datas.sideOption2}</p>
                  )}
                </RadioGroup>
                <FormHelperText>
                  {showError.find((err) => err === datas.name) &&
                    "This filed is required"}
                </FormHelperText>
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
                <FormHelperText>
                  {showError.find((err) => err === datas.name) &&
                    "This filed is required"}
                </FormHelperText>
              </FormGroup>
            ) : null}
          </div>
        ))}
        <div className="mx-auto col-md-8 mt-3 d-flex">
          <Button
            className="bg-white d-inline-block me-3 custom-color fw-bold fs-12"
            variant="outlined"
            onClick={previous}
          >
            Back
          </Button>
          <Button
            variant="contained"
            className="custom-bg fw-bold fs-12 text-white"
            onClick={handelSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default StapeThree;
