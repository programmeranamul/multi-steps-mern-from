import React, { useEffect } from "react";
import { genaredDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs/Inputs";

const FristStep = ({
  value,
  handelChange,
  next,
  showError,
  setRequiredList,
}) => {
  useEffect(() => {
    const reqiureds = genaredDataList.filter((datas) => datas.require);
    setRequiredList(reqiureds);
  }, []);

  return (
    <>
      <FormHeader
        rtl1="אין תשובות לא נכונות, הכול נכון."
        rtl2="מטרת השאלון למצוא את האדם שהכי מתאים לך מבחינת הצרכים והערכים שלך."
      />

      <Inputs
        showError={showError}
        datalist={genaredDataList}
        value={value}
        handelChange={handelChange}
        next={next}
      />
    </>
  );
};

export default FristStep;
