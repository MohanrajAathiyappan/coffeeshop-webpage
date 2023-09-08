import { Button, TextField } from "@mui/material";
import React from "react";
import './LoginPageStyle.scss';
import { Link } from "react-router-dom";

const LoginPage = () => {

  //Hooks


  return (
    <>
      <div className="loginpage">
     
        <div className="LoginForm">
        
          <h1 className="loginpageheading">CoffeeShop</h1>
          <div className="textfield">
            <TextField label="Email" variant="outlined" className="textfield" /><br />
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Password" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="text">
            <p className="forgetpassword">Forget Password?</p>
          </div>

          <div className="text">
            <p>If you are a new user? <span ><Link to='/CoffeeShopRegister' style={{textDecoration:'none',color:'#5a4343',fontWeight:'bold'}}>Kindly Register Here</Link></span></p>
          </div>

          <div className="buttons">
          <Button  variant="contained" color="success" size="large" className="loginformbuttons" style={{backgroundColor:'#694633'}}>
            Login
          </Button>
          </div>

        </div>

      </div>


    </>
  );

};

export default LoginPage;
