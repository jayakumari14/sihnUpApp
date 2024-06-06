import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    console.log("response", response);

    if (response.ok) {
      const data = await response.json();
      setMessage("Signup successful!");
      console.log("Signup successful:", data);
    } else {
      setMessage("Signup failed!");
      console.error("Signup failed");
    }
  };
  return (
    <>
      <div>
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className="createAc">Create account</h1>
          <h2>
            Already have an account? <span>Sign in</span>
          </h2>

          <div className="signup__field">
            <input
              className="signup__input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="signup__label">Username</label>
          </div>

          <div className="signup__field">
            <input
              className="signup__input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="signup__label">Email</label>
          </div>

          <div className="signup__field">
            <input
              className="signup__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="signup__label">Password</label>
          </div>

          <button type="submit">Sign up</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      {/* <Route path="/welcome" component={UserWelcomePage} /> */}
    </>
  );
}

export default App;
