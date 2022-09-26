import React, { useEffect, useState } from "react";
import "./LoginRegister.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Alert, Button, Container } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmit1, setIsSubmit1] = useState(false);
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formErrors1, setFormErrors1] = useState({});
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let Count = 0;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserLogin({ ...userLogin, [name]: value });
  };
  const [verify, setVerify] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userLogin);
    setFormErrors(validate(userLogin));
    setError("");
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      console.log("result", result.user.uid);
      console.log("email verified", result.user.emailVerified);
      if (result.user.emailVerified) {
        navigate("/forex");
      } else {
        setVerify(false);
        alert("verify your email");
      }
    } catch (err) {
      if (err.message == "Firebase: Error (auth/user-not-found).") {
        setError("User Not Found");
      }
      if (err.message == "Firebase: Error (auth/wrong-password).") {
        setError("Password Wrong");
      }
      if (
        err.message ==
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setError(
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        );
      }
    }
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexemail.test(values.email)) {
      errors.email = "This is not a valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be atleast of 6 characters";
    }
    return errors;
  };

  // Validation Register
  const handleInput1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(userRegistration);
    setFormErrors1(validate1(userRegistration));
    setError1("");
    console.log(Count);
    if (Count == 0) {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          userRegistration.email,
          userRegistration.password
        ).then(() => {
          console.log(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName:
              userRegistration.firstname.charAt(0).toUpperCase() +
              userRegistration.firstname.slice(1),
          });
        });
        if (!validate1) {
          setFormErrors1(validate1(userRegistration));
        } else {
          await sendEmailVerification(auth.currentUser, {
            url: "https://fscxperts.web.app/",
          }).then(() => {
            alert("Signup Successfull! Please check your email");
          });
          if (auth.currentUser.emailVerified) {
            navigate("/forex");
          } else {
            navigate("/login");
          }
        }
      } catch (err) {
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
          setError1("User Already Exists");
        }
      }
    }
    setIsSubmit1(true);
  };
  useEffect(() => {
    console.log(formErrors1);
    if (Object.keys(formErrors1).length === 0 && isSubmit1 && !error1) {
      console.log(userRegistration);
    }
  });
  const validate1 = (values) => {
    const errors = {};
    const regexstring = /^[a-z]+$/i;
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First Name is required";
      Count += 1;
    } else if (!regexstring.test(values.firstname)) {
      errors.firstname = "Are you sure you entered your name correctly";
      Count += 1;
    } else if (values.firstname.length < 3) {
      errors.firstname = "Name must be alteast of 3 characters";
      Count += 1;
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexemail.test(values.email)) {
      errors.email = "This is not a valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be alteast of 6 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "This field can't be empty";
      Count += 1;
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Passwords don't match";
      Count += 1;
    }
    return errors;
  };
  const googleProvider = new GoogleAuthProvider();
  const withGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        console.log(auth.currentUser);
        if (auth.currentUser.emailVerified) {
          navigate("/forex");
        } else {
          alert("verify your email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };
  return (
    <div>
      <div className="loginmain">
        <Link to="/home">
          <IoMdArrowRoundBack className="loginback" />
        </Link>
        <div className={`logincontainer ${addclass}`} id="logincontainer">
          <div className="form-logincontainer  sign-up-logincontainer">
            <form>
              <div className="regfix">
                {Object.keys(formErrors1).length === 0 &&
                isSubmit1 &&
                !error1 ? (
                  <></>
                ) : (
                  error1 && <p className="rgerr2">{error1}</p>
                )}
                <h1 className="loginheading">Create Account</h1>
                <br />
                <input
                  type="text"
                  placeholder="NAME"
                  name="firstname"
                  onChange={handleInput1}
                  id="inlineFormInputGroup1"
                  value={userRegistration.firstname}
                  className="logininput2"
                />
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors1.firstname}
                </p>
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  onChange={handleInput1}
                  id="inlineFormInputGroup2"
                  value={userRegistration.email}
                  className="logininput2"
                />
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors1.email}
                </p>
                <input
                  type={type}
                  placeholder="PASSWORD"
                  name="password"
                  onChange={handleInput1}
                  id="inlineFormInputGroup3"
                  value={userRegistration.password}
                  className="logininput2"
                />
                <span className="eye" onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors1.password}
                </p>
                <input
                  type={type}
                  placeholder="CONFIRM PASSWORD"
                  name="confirmpassword"
                  onChange={handleInput1}
                  id="inlineFormInputGroup4"
                  value={userRegistration.confirmpassword}
                  className="logininput2"
                />
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors1.confirmpassword}
                </p>
                <button
                  className="loginregister"
                  type="submit"
                  onClick={handleSubmit1}
                >
                  REGISTER
                </button>
              </div>
            </form>
          </div>
          <div className="form-logincontainer sign-in-logincontainer">
            <form>
              {Object.keys(formErrors).length === 0 &&
              isSubmit &&
              !error &&
              verify ? (
                <></>
              ) : (
                error && <p className="rgerr">{error}</p>
              )}
              <div className="loginfix">
                <h1 className="loginheading">Login</h1>
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  onChange={handleInput}
                  id="inlineFormInputGroup"
                  className="logininput1"
                />
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors.email}
                </p>
                <input
                  type={type}
                  placeholder="PASSWORD"
                  name="password"
                  onChange={handleInput}
                  id="inlineFormInput"
                  className="logininput1"
                />
                <span className="eyel eye" onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
                <p className="text-danger" style={{ fontSize: "12px" }}>
                  {formErrors.password}
                </p>
                <button className="login" type="submit" onClick={handleSubmit}>
                  LOGIN
                </button>
                <h5 className="loginheading2">OR</h5>
                <Button
                  className="google"
                  onClick={withGoogle}
                  style={{ backgroundColor: "black" }}
                >
                  <FcGoogle
                    style={{ backgroundColor: "#fff", borderRadius: "10rem" }}
                    className="googleicon"
                  />
                  <span style={{ marginLeft: "1rem", fontSize: "1.3rem" }}>
                    Sign In With Google
                  </span>
                </Button>
                <br />
                <br />
                <Link to="/forgetpassword" className="loginfp">
                  Forget Password ?
                </Link>
              </div>
            </form>
          </div>
          <div className="overlay-logincontainer">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setaddclass("")}
                >
                  GO TO LOGIN
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setaddclass("right-panel-active")}
                >
                  GO TO REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
