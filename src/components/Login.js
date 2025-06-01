import Header from "./Header";
import { useState, useRef } from "react";
import { handleEmail } from "../utils/handleEmail";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
const dispatch = useDispatch()
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignIn, setSignIn] = useState(true);
  const [errMessage, setErrorMesssage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMesssage(handleEmail(email.current.value, password.current.value));
    console.log(isSignIn);
    if (errMessage) {
      console.log(email.current.value);
      console.log(errMessage);
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                 dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              // Profile updated!
              // ...
              navigate("/browse")
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesssage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesssage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleSignUp = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="flex flex-wrap ">
      <Header />
      <form className="absolute left-[650px] top-44 flex flex-col m-3 bg-black p-11 bg-opacity-80 rounded-md ">
        <h3 className="text-white m-3 font-bold text-3xl">Sign In</h3>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white"
            placeholder="Full name"
          ></input>
        )}
        <input
          ref={email}
          type="email"
          className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white"
          placeholder="Enter email"
        ></input>
        <input
          ref={password}
          type="password"
          className="bg-gray-600 m-3 p-4 rounded-md bg-opacity-75 outline-none w-[300px] text-white"
          placeholder="Enter password"
        ></input>
        <button
          className="bg-red-600 text-white w-[300px] m-3 p-2 rounded-md"
          onClick={handleLogin}
        >
          {isSignIn ? "Login":"Sign Up"}
        </button>
        {errMessage != null && <p className="text-red-600">{errMessage}</p>}
        <p className="text-white m-3 p-2 cursor-pointer" onClick={handleSignUp}>
          {" "}
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already an existing user?Sign In"}
        </p>
      </form>
      <div className="h-[100vh] w-[400vh]">
        <img
          className="h-[100%] w-[100%]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Login;
