import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [email, password]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-300">
      <h1 className="text-black text-3xl mb-3">LOGIN</h1>
      <label className="text-1xl" htmlFor="email">
        {" "}
        Enter the Email{" "}
      </label>
      <input
        className="border-2 border-black rounded-md my-4 p-2"
        value={email}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 border-black rounded-md my-4 p-2"
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {isActivated ? (
        <Link
          className="rounded bg-black text-white p-1 "
          to="/webcam-validation"
        >
          Verify
        </Link>
      ) : (
        <p className="text-black">Fill the fields</p>
      )}
    </div>
  );
}

export default Login;
