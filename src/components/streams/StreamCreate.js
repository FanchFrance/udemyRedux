import React from "react";
import { Field, reduxForm } from "redux-form";

class streamCreate extends React.Component {
  renderInput({ input, label }) {
    console.log(input);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(streamCreate);
