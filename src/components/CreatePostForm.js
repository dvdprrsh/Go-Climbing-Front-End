import React, { Component } from "react";
import axios from "axios";
import "./screens/styles/CreatePostForm.css";
import { Formik } from "formik";

import * as Yup from "yup";

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
  }

  onSubmit = values => {
    const { title, body } = values;
    if (window.gapi.auth2.getAuthInstance().isSignedIn.Ab === true) {
      this.setState({ comment: "" });
      axios
        .post(
          "https://climbing-cors.herokuapp.com/https://empiredigital.eu/goclimbing/create.php" +
            "?posttitle=" +
            title +
            "&postbody=" +
            body +
            "&profileimg=" +
            window.gapi.auth2.getAuthInstance().currentUser.Ab.w3.Paa +
            "&username=" +
            window.gapi.auth2.getAuthInstance().currentUser.Ab.w3.U3
        )
        .then(result => {
          window.location.reload(true);
        });
    } else {
      this.setState({
        comment: "You must be signed in to post on the forums."
      });
    }
  };

  render() {
    return (
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={values => this.onSubmit(values)}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Required"),
          body: Yup.string().required("Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <div id="testing" className="ui form">
              {this.state.comment}
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
