import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUpClient() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  function signIn(data: { user: any; token: string }) {
    setUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate/client", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="section1-wrapper">
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            fetch("http://localhost:4000/sign-up/client", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                phone: Number(e.target.phone.value),
                avatar: e.target.avatar.value,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  navigate("/sign-in-client")
                }
              });
          }}
        >
          <h1 className="h1">Sign Up</h1>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="input-GS"
            required
          />

          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="input-GS"
            required
          />
          <input
            id="Password"
            name="password"
            type="password"
            placeholder="Password"
            className="input-GS"
          />

<input
            id="phone"
            name="phone"
            type="number"
            placeholder="Phone Number"
            className="input-GS"
            required
          />
          <input
            id="avatar"
            name="avatar"
            type="text"
            placeholder="Avatar"
            className="input-GS"
            required
          />

          <button className="button-GS">
            <b>Register</b>
          </button>
          <p className="message">
            Registered?{" "}
            <Link to="/sign-in-client" className="signup">
              SIGN IN
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
