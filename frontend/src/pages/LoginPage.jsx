import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet ? <Link to={'/register'} className="underline text-black">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;