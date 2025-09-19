import React from "react";

function SignUp({ onFlip }) {
  return (
    <div className="form-side">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={onFlip}>
          Sign In
        </span>
      </p>
    </div>
  );
}

export default SignUp;
