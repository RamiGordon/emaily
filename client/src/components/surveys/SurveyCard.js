import React from "react";

const SurveyCard = ({ survey }) => {
  return (
    <div key={survey._id} className="card darken-1">
      <div className="card-content">
        <span className="card-title">{survey.title}</span>
        <p>{survey.body}</p>
        <p className="right">
          Send On: {new Date(survey.dateSent).toLocaleDateString()}
        </p>
      </div>
      <div className="card-action">
        <a> Yes: {survey.yes}</a>
        <a> No: {survey.no}</a>
      </div>
    </div>
  );
};

export default SurveyCard;
