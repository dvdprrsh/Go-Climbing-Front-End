import React, { Component } from "react";
import axios from "axios";
import "./screens/styles/CreatePostForm.css";
import { Formik } from "formik";

import * as Yup from "yup";

class CreatePostForm extends Component {
  onSubmit = values => {
    const { title, body, username } = values;

    axios
      .post(
        "https://climbing-cors.herokuapp.com/https://empiredigital.eu/goclimbing/create.php" +
          "?posttitle=" +
          title +
          "&postbody=" +
          body +
          "&username=" +
          username
      )
      .then(result => {
        window.location.reload(true);
      });
  };

  render() {
    return (
      <Formik
        initialValues={{ title: "", body: "", username: "" }}
        onSubmit={values => this.onSubmit(values)}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Required"),
          body: Yup.string().required("Required"),
          username: Yup.string().required("Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            //dirty,
            //isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
            //handleReset
          } = props;
          return (
            <div id="testing" className="ui form">
              <form onSubmit={handleSubmit}>
                <div id="inputs" className="ui input">
                  <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Post Title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title && touched.title
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </div>
                {errors.title && touched.title && (
                  <div className="input-feedback">{errors.title}</div>
                )}
                <div id="inputs" className="ui input">
                  <input
                    type="text"
                    name="body"
                    placeholder="Body Text"
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.body && touched.body
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </div>
                {errors.title && touched.title && (
                  <div className="input-feedback">{errors.title}</div>
                )}
                <div id="inputs" className="ui input">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </div>
                {errors.title && touched.title && (
                  <div className="input-feedback">{errors.title}</div>
                )}
                <button
                  id="submitbtn"
                  className="fluid ui button"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </Formik>
    );
  }
}

export default CreatePostForm;
