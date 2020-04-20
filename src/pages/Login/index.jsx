import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pane, TextInput, Button, Heading } from "evergreen-ui";
import background from "./../../assets/images/background.jpg";
import { connect } from "react-redux";
import { LoginAction } from "./../../redux/actions/login.actions";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const FormContainer = styled(Pane)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(Heading)`
  margin-bottom: 50px;
  color: white;
`;
const Input = styled(TextInput)`
  width: 100%;
  margin-bottom: 10px;
  height: 40px;
`;
const Btn = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
`;

function Login({ LOGIN_RESPONSE, LoginAction }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!LOGIN_RESPONSE) return;

    if (LOGIN_RESPONSE.status !== 200) {
      //handle error
      return;
    }

    //handle success
    console.log(`Welcome ${LOGIN_RESPONSE.res.displayName}`);
  }, [LOGIN_RESPONSE]);

  const FormElement = (
    <FormContainer>
      <Title size={800} marginTop="default">
        MOVIES
      </Title>
      <Input
        name="text-input-email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="text-input-password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Btn
        appearance="primary"
        onClick={() => {
          LoginAction({ email, password });
        }}
      >
        Sign in
      </Btn>
    </FormContainer>
  );

  return <Wrapper>{FormElement}</Wrapper>;
}

const mapStateToProps = (state, props) => {
  return {
    LOGIN_RESPONSE: state.loginReducers.LoginResponse,
  };
};

export default connect(mapStateToProps, { LoginAction })(Login);
