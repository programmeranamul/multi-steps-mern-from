import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { BiErrorCircle } from "react-icons/bi";

// 1. map datalist
// 2.check data type
// 3. show input conditionaly
// 4.show error message
// 5.show buttons

const Inputs = ({
  showError,
  datalist,
  value,
  handelChange,
  next,
  previous,
  handelSubmit,
}) => {
  return (
    <div className="mb-5 container">
      {/* map datalist */}
      {datalist.map((datas) => (
        <div
          className={` form__header col-lg-8   mx-auto mt-4 p-4 bg-white ${
            showError.find((err) => err === datas.name) && "border-red"
          }`}
          key={datas.label}
        >
          <p className="mb-0">
            {datas.label}{" "}
            {datas.require ? <span className="text-danger">*</span> : ""}
          </p>
          {datas.subLabel && <p className="mb-0 fs-12">{datas.subLabel}</p>}
          {/* if input type text */}
          {datas.input && datas.input.type === "text" ? (
            <div>
              <TextField
                id="standard-error-helper-text"
                label="Your Answer"
                helperText={
                  showError.find((err) => err === datas.name) && (
                    <span>
                      <BiErrorCircle className="fs-19" /> This filed is required
                    </span>
                  )
                }
                className={`w-50 ${
                  showError.find((err) => err === datas.name) && "error"
                }`}
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
                {showError.find((err) => err === datas.name) && (
                  <span>
                    <BiErrorCircle className="fs-19" /> This filed is required
                  </span>
                )}
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
                {showError.find((err) => err === datas.name) && (
                  <span>
                    <BiErrorCircle className="fs-19" /> This filed is required
                  </span>
                )}
              </FormHelperText>
            </FormGroup>
          ) : null}
        </div>
      ))}
      {/* show buttons */}
      <div className="mx-auto col-md-8 mt-3">
        {previous && (
          <Button
            className="bg-white d-inline-block me-3 custom-color fw-bold fs-12"
            variant="outlined"
            onClick={previous}
          >
            Back
          </Button>
        )}
        {next && (
          <Button
            className="bg-white d-inline-block custom-color fw-bold fs-12"
            variant="outlined"
            onClick={next}
          >
            Next
          </Button>
        )}
        {handelSubmit && (
          <Button
            variant="contained"
            className="custom-bg fw-bold fs-12 text-white"
            onClick={handelSubmit}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Inputs;
