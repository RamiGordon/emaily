import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="type"
          key={name}
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ label, name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
