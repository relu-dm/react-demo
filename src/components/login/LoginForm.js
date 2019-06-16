import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {loginAction} from "../../actions";
import {connect} from "react-redux";


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const minLength4 = value => (value && value.length < 4) ? `Must be 4 characters or more` : undefined;
const passMinLength8 = value => (value && value.length < 8) ? `Passwords shorter than 8 characters are insecure` : undefined;


const renderField = ({input, label, id, placeholder, type, meta: {touched, error, warning}}) =>
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input {...input} id={id} placeholder={placeholder} className="form-control" type={type}/>
        {touched && ((error && <span className="text-danger small">{error}</span>)
            || (warning && <span className="text-warning small">{warning}</span>))}
    </div>;


const LoginForm = ({history, handleSubmit, pristine, reset, submitting, loginHandler}) => {

    const login = (user, password) => {
        loginHandler(user, password);
        history.push("/work");
    };

    return (
        <form onSubmit={handleSubmit(val => login(val.user, val.password))}>
            <div className="card">
                <div className="card-header">
                    Login [4 - React + Redux + Form + Route]
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <Field name="user" component={renderField} type="text"
                                   label="User name"
                                   validate={[required, minLength4]}
                                   id="user" placeholder="Enter user name"/>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" component={renderField} type="password"
                                       validate={[required, minLength4]}
                                       warn={[passMinLength8]}
                                       id="pass" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>);
};


const mapStateToProps = (state) => ({});

const mapDispatchToProps = ({loginHandler: loginAction});

const reduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(reduxLoginForm);
