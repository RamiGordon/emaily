import React from "react";

const SurveyField = ({ input, label, meta }) => {
  const { error, touched } = meta;

  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: "5px" }} {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
