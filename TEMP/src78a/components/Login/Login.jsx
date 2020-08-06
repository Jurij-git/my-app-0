import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const LoginForm = (props) => {
    return (
            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field placeholder ={"Email"} name={"email"}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder ={"Password"} name={"password"}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"rememberMe"}  />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        //console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

export default connect(null, {login})(Login);