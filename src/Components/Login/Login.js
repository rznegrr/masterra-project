import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import Modal from "../../UI/Modal";
import classes from "./Login.module.css";

const Login = (props) => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [httpError, setHttpError] = useState();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const switchLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj02qb1eueG8HhhoBFribGs5TAYyUFBh8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj02qb1eueG8HhhoBFribGs5TAYyUFBh8";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      Headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "رمز عبور یا ایمیل اشتباه وارد شده است!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/Profile");
      })
      .catch((err) => {
        setHttpError(err.message);
      });
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.login}>
        <h1>{isLogin ? "ورود به حساب کاربری" : "ساخت حساب کاربری"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">ایمیل :</label>
            <input
              className="text-left font-sans"
              type="email"
              id="email"
              required
              ref={emailInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">رمز عبور :</label>
            <input
              className="text-right"
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <p className={classes.errorMessage}>{httpError}</p>
          <div className={classes.actions}>
            {!isLoading && (
              <button className="m-2 bg-info text-white px-8 py-1 rounded">
                {isLogin ? "ورود" : "ثبت نام"}
              </button>
            )}
            {isLoading && (
              <button className="m-2 bg-info text-white px-8 py-1 rounded">
                لطفا منتظر بمانید..
              </button>
            )}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchLoginHandler}
            >
              {isLogin ? "ساخت حساب کاربری جدید" : "از قبل ثبتنام کرده ام!"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
