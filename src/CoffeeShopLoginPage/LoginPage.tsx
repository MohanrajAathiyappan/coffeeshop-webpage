import { Alert, AlertTitle, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import "./LoginPageStyle.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
const LoginPage = () => {
  //Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //UseNaviagte
  const Navigate = useNavigate();

  //alert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //LoginClick function- which we we click login it check the login credentials and do the following
  const LoginClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    //Giving formdata because of using FromForm in backend WebAPi
    const formData = new FormData();

    formData.append("emailAddress", email);
    formData.append("password", password);

    axios
      .post<ICofeeshopLogins>(
        "https://localhost:7142/api/Coffeeshop/UserLogin",
        formData
      )
      .then(() => {
        if (email != null && password != null) {
          console.log("Login Success");

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });

          Navigate("/Homepage");
        }
        else {
          console.log("Login Failed");
          Toast.fire({
            icon: "error",
            title: "Login Failed",
          })
        }
      })
      .catch((x) =>
        Toast.fire({
          icon: "error",
          title: "Signed in Failed",
        })
      );
  };

  return (
    <>
      <div className="loginpage">
        <div className="LoginForm">
          <h1 className="loginpageheading">CoffeeShop</h1>
          <div className="textfield">
            <TextField
              label="Email"
              variant="outlined"
              className="textfield"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <br />
          </div>

          <div className="textfield">
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              className="textfield"
              onChange={(e: any) => setPassword(e.target.value)}
            ></TextField>
          </div>

          <div className="text">
            <Link to='CoffeeShopForgetPassword' style={{textDecoration:'none'}}>
              <p className="forgetpasswordtext">Forget Password?</p>
            </Link>
          </div>

          <div className="text">
            <p>
              If you are a new user?{" "}
              <span>
                <Link
                  to="/CoffeeShopRegister"
                  style={{
                    textDecoration: "none",
                    color: "#5a4343",
                    fontWeight: "bold",
                  }}
                >
                  Kindly Register Here
                </Link>
              </span>
            </p>
          </div>

          <div className="buttons">
            <Button
              variant="contained"
              color="success"
              size="large"
              className="loginformbuttons"
              style={{ backgroundColor: "#694633" }}
              onClick={LoginClick}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
