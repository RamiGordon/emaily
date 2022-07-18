import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyCard from "./SurveyCard";

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  });

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
      return <SurveyCard key={survey._id} survey={survey} />;
    });
  };

  return <div>{renderSurveys()}</div>;
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
