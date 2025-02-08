import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"Login"} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={required} />
            </div>
            <div>
                <Field  type={"checkbox"} name={"rememberMe"} component={Input} validate={required} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;