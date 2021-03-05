import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from '../FormInput/FormInput';
import CustomButton from "../CustomButton/CustomButton";

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({[name]: value})
        
    }

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in withyour email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput label='email' name='email' type='email' value={this.state.email} required handleChange={this.handleChange}/>
					<FormInput label='password' name='password' type='password' value={this.state.password} required handleChange={this.handleChange} />
					<CustomButton type='submit'> Sign In </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
