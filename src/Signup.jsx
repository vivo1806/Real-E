import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.target);
    const user = {
      name: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(
        "https://minor-project-kkof.onrender.com/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      console.log("Signup success:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.name); // Make sure the response includes this
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="outer">
        <div className="content">
          <h1>Signup</h1>
          <p>It just takes 30 seconds</p>
          <main>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">UserName</label>
              <input type="text" id="username" name="username" required />
              <br />
              <br />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
              <br />
              <br />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <br />
              <br />

              {error && <p style={{ color: "red" }}>{error}</p>}

              <footer>
                <button type="submit" id="submit">
                  Create Account
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap');

h1, body {
  margin: 0;
}

label {
  font-family: sans-serif;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  color: rgba(11, 69, 186, 0.764);
  text-align: center;
  font-family: sans-serif;
}

.outer {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  border: 2px solid lightblue;
  padding: 15px 40px 40px;
  border-radius: 4px;
}

.content p {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 32px;
  color: rgba(61, 178, 190, 0.97);
  text-align: center;
  font-family: sans-serif;
}

input, button#submit {
  width: 250px;
  padding: 5px;
}

#submit {
  background-color: #236ae5d5;
  box-sizing: content-box;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

#submit:hover {
  background-color: rgba(19, 100, 231, 0.882);
}

label {
  display: block;
  margin: 5px 0px;
  font-weight: bold;
}`}
      </style>
    </>
  );
}
