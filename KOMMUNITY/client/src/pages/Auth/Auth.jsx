import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
  const dispatch = useDispatch();
  //creating the loading funtionality while pressing the button
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  const [isSignUp, setIsSignUp] = useState(false);


  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    username: "",
  });

  const [confirmPassword, setConfirmPassword] = useState(true);

  function handleChange(e) {
    //it will handle the changes in all inputs altogether
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //it will prevent to redirect to other page.
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPassword(false);
    } else {
      dispatch(logIn(data));
    }
  }

  function resetForm() {
    setConfirmPassword(true);
    setdata({
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  }

  return (
    <div className="auth">
      {/* Left Side */}
      <div className="auth-left">
        <img className="logo" src={Logo} alt="logo" />
        <div className="webname">
          <h1>Kommunity</h1>
          <h6>Let's connect together</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />

            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            )}
          </div>

          <span
            style={{
              display: confirmPassword ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account Sign Up"}
            </span>
          </div>
          <button className="button info-button" type="submit" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function SignUp() {
//   return (
//     <div className="auth-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           ></input>

//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           ></input>
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />

//           <input
//             type="text"
//             className="infoInput"
//             name="confirmpassword"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account. Login!
//           </span>
//         </div>
//         <button className="button info-button" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

// function LogIn() {
//   return (
//     <div className="auth-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//           <button className="button info-button" type="submit">
//             Signup
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default Auth;
