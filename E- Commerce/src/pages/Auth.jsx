import { useState } from "react";
import { useForm } from "react-hook-form";
import {useAuth} from '../Context/useAuth'
import {useNavigate} from "react-router-dom"

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const{signup,login}=useAuth();
  const navigate=useNavigate()
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    setError(null);
    let result;

    if(mode==="signup"){
      result=signup(data.email,data.password);

    }else{
      result=login(data.email,data.password);
    }
    
    if(result.success){
      navigate("/");
    }else{
      setError(result.error);
    }
  }

  return (
    <div className="Page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-tittle">
            {mode === "signup" ? " Sign up" : "Login"}
          </h1>
          
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error&&<div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                id="email"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  pattern:{
                    value: passwordRegex,
                    message:"Password must contain at least one letter, one number, and one special character."
                  },
                  minLength: {
                    value:8,
                    message:" Password must be at least 8 Characters"
                  },
                  maxLength:{
                    value: 16,
                    message:" Password must not exceed 16 Characters"
                  }
                })}
                className="form-input"
                type="password"
                placeholder="Enter your password"
                id="password"
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign up" : "Login"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  login
                </span>{" "}
              </p>
            ) : (
              <p>
                don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  sign up
                </span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
