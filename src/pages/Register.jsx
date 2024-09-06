import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components/index";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="name" placeholder="Yavuz" />
        <FormRow type="text" name="lastName" placeholder="Ulgar" />
        <FormRow type="text" name="location" placeholder="Turkey" />
        <FormRow type="email" name="email" placeholder="yavuz@gmail.com" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
