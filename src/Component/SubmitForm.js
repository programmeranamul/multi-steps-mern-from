import React from "react";


const SubmitForm = ({createNexFrom}) => {

 

  return (
    <div className="container">
      <div className="col-lg-8   mx-auto mt-4 p-4 rounded roubded-7px before__border  bg-white">
       <h2>שאלון לזוגיות ארוכת טווח</h2>
       <p>Your response has been recorded.</p>
       <button className="linkBtn" onClick={createNexFrom}>Submit another response</button>
      </div>
    </div>
  );
};

export default SubmitForm;
