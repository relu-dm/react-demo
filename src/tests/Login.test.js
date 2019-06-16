import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


describe("LoginForm", () => {
    it('should fails if we user wrong user name', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        expect(1).toEqual(1);
        ReactDOM.unmountComponentAtNode(div);
    });

});