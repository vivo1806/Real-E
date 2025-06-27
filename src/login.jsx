import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from react-router-dom

export default function Login() {
  const navigate = useNavigate(); // Initialize navigate

  // handleLogin function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);

    // Prepare the user data to send
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      // Make POST request to login endpoint
      const response = await fetch(
        "https://minor-project-kkof.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Tell server we are sending JSON
          },
          body: JSON.stringify(user), // Send user data in the request body
        },
      );

      if (!response.ok) {
        const errorData = await response.json(); // Get error details
        throw new Error(errorData.error || "Login failed"); // Throw error if something goes wrong
      }

      const data = await response.json(); // Get the response (user and token)

      console.log("Login successful:", data);
      localStorage.setItem("username", data.user.name);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(`Login failed: ${error.message}`); // Show an error message if login fails
    }
  };

  return (
    <>
      <div className="outer">
        <div className="content">
          <h1>Login</h1>
          <p>Welcome back!</p>
          <main>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
              <br />
              <br />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <br />
              <br />

              <footer>
                <button type="submit" id="submit">
                  Login
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

h1,body{
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
