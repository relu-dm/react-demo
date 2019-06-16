import React, {useState} from 'react';
import PropTypes from 'prop-types';


const LoginForm = ({loginHandler}) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        loginHandler(user, pass);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="card">
                <div className="card-header">
                    Login - [1 - React]
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="user">User name</label>
                                <input type="text" className="form-control"
                                       id="user" placeholder="Enter user name"
                                       value={user} onChange={e => setUser(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"
                                       id="pass" placeholder="Password"
                                       value={pass} onChange={e => setPass(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );

};


LoginForm.propTypes = {
    loginHandler: PropTypes.func.isRequired
};

export default LoginForm;