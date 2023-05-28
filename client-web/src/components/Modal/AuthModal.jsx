import React from "react";
import ModalDialog from "../Modal/ModalDialog";
import InputField from "../InputBox/InputField";
import PasswordField from "../PasswordBox/PasswordField";
import ButtonImage from "../Button/ButtonImage";
import ButtonLoading from "../Button/ButtonLoading";
import Divider from "../Divider/Divider";
import "./AuthModal.css";
const AuthModal = ({ isOpen, onClose, mode, onInputChange }) => {
  const isLoginMode = mode === "login";

  return (
    <ModalDialog isOpen={isOpen} onClose={onClose}>
      <p className="welcome__greetings">
        {isLoginMode ? "Welcome Back" : "Create an Account"}
      </p>
      <ButtonImage text="Login with Google" />
      <Divider
        text={isLoginMode ? "or Login with Email" : "or Signup with Email"}
      />
      {!isLoginMode && (
        <InputField
          type="text"
          placeholder="Username"
          onChange={onInputChange}
          name="username"
        />
      )}
      <InputField
        type="email"
        placeholder="Email"
        onChange={onInputChange}
        name="email"
      />
      <PasswordField
        type="password"
        placeholder="Password"
        onChange={onInputChange}
        name="password"
      />
      <ButtonLoading text={isLoginMode ? "Login" : "Signup"} />
    </ModalDialog>
  );
};

export default AuthModal;
