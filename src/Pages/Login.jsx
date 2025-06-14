import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "shoban@gmail.com" && password === "123456") {
      onLogin();          
      navigate("/home");  
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to E-learning</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
