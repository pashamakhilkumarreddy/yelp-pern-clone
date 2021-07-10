import { useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../../store/actions/userActions";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Form = styled.form`
  box-shadow: 0 0 0.25rem 2px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2.1rem;
`;

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { isLoggedIn, tokens } = useSelector((state) => state.user);
  const dispatchRedux = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  const handleOnChange = (e) => {
    try {
      const { name, value } = e.target;
      dispatch({ type: name.toUpperCase(), payload: value });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();
      const { email, password } = state;
      if (email && password) {
        dispatchRedux(loginUser({ email, password }));
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="columns is-centered is-vcentered is-mobile">
      <div className="column is-full-mobile is-half-tablet is-6-desktop is-6-widescreen is-6-fullhd">
        <Form className="form mt-3">
          <h2 className="title is-3 has-text-centered">Login</h2>
          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Please enter an email"
                value={state.email}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="control">
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Please enter a password"
                value={state.password}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <div className="field is-grouped is-justify-content-center">
            <div className="control">
              <button className="button is-primary" onClick={handleOnSubmit}>
                <strong>Login</strong>
              </button>
            </div>
            <div className="control">
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => dispatch({ type: "RESET" })}
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
