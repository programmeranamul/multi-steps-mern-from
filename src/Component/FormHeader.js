import React from "react";
import "./Form.css"

const FormHeader = () => {
  return (
      <div className="col-md-8 p-4 form__header bg-white mx-auto mt-3">
        <h3 className="fw-600">שאלון לזוגיות ארוכת טווח</h3>
        <div>
          <p className="mb-2 small" dir="rtl">אין תשובות לא נכונות, הכול נכון.</p>
          <p dir="rtl" className="small mb-0">
            מטרת השאלון למצוא את האדם שהכי מתאים לך מבחינת הצרכים והערכים שלך.
          </p>
        </div><p className="text-danger mb-0">* Required</p>
      </div>
  );
};

export default FormHeader;
