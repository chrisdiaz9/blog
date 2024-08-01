import { useState } from "react";
import "./Signup.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to convertkit

    setSubmitted(true);
  };

  return (
    <div className="signup-form">
      <h2>Subscribe to my newsletter...<br /><br />Cm'on it's free!</h2>
      {submitted ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />{" "}

          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
 