import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Register() {
  const [error, setError] = useState();
  const [registerUser] = useRegisterMutation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      let success = false;
      success = await registerUser(form).unwrap();
      if (success) {
        navigate(`/User`);
      }
    } catch (error) {
      setError(error.data.message);
    }
  };

  // TODO handle login errors
  return (
    <div>
      <div className="form-group1">
        <form onSubmit={submit}>
          <div className="">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="firstNameHelp"
              placeholder="Enter first name"
              name="firstname"
              onChange={updateForm}
            />
          </div>
          <div className="">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="lastNameHelp"
              placeholder="Enter last name"
              name="lastname"
              onChange={updateForm}
            />
          </div>
          <div className="">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email@xxx.com"
              name="email"
              onChange={updateForm}
            />
          </div>

          <div className="">
            <label>Password</label>
            {/* <div className="input-icon"> */}
            {/* <span className="input-group-text">
                <i className="fas fa-lock"></i> */}
            {/* </span> */}
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={updateForm}
            />
          </div>
          {/* </div> */}
          <div>
            {/* Button here must be "type="submit" so it correctly proceeds */}
            {/* to the callback to register the new user*/}
            <button type="submit" className="btn btn-primary change">
              Register
            </button>
            {error ? (
              <div className="loginError">
                <br />
                <h5>{error} - Please check your input and try again.</h5>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
