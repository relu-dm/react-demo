import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {logoutAction} from "../../actions";
import {connect} from "react-redux";
import {workAction} from "../../actions/WorkAction";


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const minLength4 = value => (value && value.length < 4) ? `Must be 4 characters or more` : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;


const renderInputGroup = (props) => {
    const {input, placeholder, label, id, type, meta: {touched, error, warning}} = props;
    const field = (type === 'textarea')
        ? <textarea {...input} id={id} placeholder={placeholder} className="form-control"/>
        : <input {...input} id={id} placeholder={placeholder} type={type} className="form-control"/>;
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            {field}
            {touched && ((error && <span className="text-danger small">{error}</span>)
                || (warning && <span className="text-warning small">{warning}</span>))}
        </div>
    );
};


const WorkForm = ({handleSubmit, pristine, reset, submitting, workActionHandler, logoutHandler}) => {

    return (
        <form onSubmit={handleSubmit(val => workActionHandler(val))}>
            <div className="card">
                <div className="card-header">
                    Larger Form
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="user" component={renderInputGroup} type="text"
                                   label="User name"
                                   validate={[required, minLength4]}
                                   id="user" placeholder="Enter user name"/>
                        </div>
                        <div className="col-md-6">
                            <Field name="email" component={renderInputGroup} type="email"
                                   label="Email"
                                   validate={[required, email]}
                                   id="email" placeholder="Your Email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="first_name" component={renderInputGroup} type="text"
                                   label="First Name"
                                   validate={[required]}
                                   id="first_name" placeholder="First Name"/>
                        </div>
                        <div className="col-md-6">
                            <Field name="last_name" component={renderInputGroup} type="text"
                                   label="Last Name"
                                   validate={[required]}
                                   id="last_name" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Field name="comments" component={renderInputGroup} type="textarea"
                                   label="Comments"
                                   validate={[required]}
                                   id="comments" placeholder="Enter some comments"/>
                        </div>

                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-warning float-right" onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </form>
    );

};


const mapStateToProps = (state) => ({authStatus: state.AuthReducer.authStatus});

const mapDispatchToProps = ({logoutHandler: logoutAction, workActionHandler: workAction});

const reduxWorkForm = reduxForm({form: 'work'})(WorkForm);

export default connect(mapStateToProps, mapDispatchToProps)(reduxWorkForm);
