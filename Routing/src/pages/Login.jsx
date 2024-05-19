import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target; // email, password

    const newFormState = {
      ...formState,
      [name]: value,
    };

    setFormState(newFormState);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: formState,
    }).then((res) => {
      console.log(res?.data?.token);
    });
  }

  const { email, password } = formState;
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email :{" "}
          <input
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </label>
        <br />
        <br />
        <label>
          Password :{" "}
          <input
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </label>
        <br />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </>
  );
}
