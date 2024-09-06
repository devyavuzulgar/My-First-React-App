import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components/index";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="name" placeholder="yavuz@gmail.com" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="submit" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
