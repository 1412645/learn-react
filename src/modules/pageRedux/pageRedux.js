import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subCount } from "./action";
import DemoMemo from "../../components/demoMemo";

const PageRedux = () => {
  const [signupInput, setSignupInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [openError, setOpenError] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const count = useSelector((state) => state.PageReduxReducer.count);
  const [position, setPosition] = useState("Parent");
  const dispatch = useDispatch();

  console.log("PageRedux");

  const handleAdd = () => {
    // dispatch(addCount({ count: count + 1 }));
    dispatch({ type: "ADD_ASYNC", count: count + 1 });
    // setInputValue((pre) => pre + 1);
  };

  const handleSub = () => {
    dispatch(subCount({ count: count - 1 }));
    // setInputValue((pre) => pre - 1);
  };

  var first_function = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
        console.log("aaaa");
      }, 3000);
    });
  };

  var async_function = async function () {
    const data = await first_function();
    console.log("test test");
    console.log("data:", data);
  };

  const handleChange = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenError(true);
  };

  const handleUpdatePosition = useCallback(() => {
    setPosition("Update");
  }, [position]);

  return (
    <>
      <h1 data-testid="header">Page Redux</h1>
      <div>
        <div>
          Content Redux page: <span data-testid="counter">{count}</span>
        </div>
        <button onClick={handleAdd} data-testid="btn-plus">
          Add
        </button>
        <input
          value={inputValue}
          type="number"
          data-testid="input-counter"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSub} data-testid="btn-sub">
          Sub
        </button>
      </div>
      <div className="wrapper-form">
        <form>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={signupInput.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={signupInput.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirmPassword"
              value={signupInput.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {openError && <div>the email you input is invalid</div>}
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <DemoMemo
        position={position}
        handleUpdatePosition={handleUpdatePosition}
        setPosition={setPosition}
      />
    </>
  );
};

export default PageRedux;
