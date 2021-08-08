import React from "react";
import "./Form.css";

const FormHeader = ({ rtl1, rtl2 }) => {
  return (
    <div className="col-md-8 p-4 form__header before__border bg-white mx-auto mt-3">
      <h3 className="fw-600">שאלון לזוגיות ארוכת טווח</h3>
      <div>
        <p className="mb-2 small" dir="rtl">
          {rtl1}
        </p>
        <p dir="rtl" className="small mb-0">
          {rtl2}
        </p>
      </div>
      <p className="text-danger mb-0">* Required</p>
    </div>
  );
};

export default FormHeader;
