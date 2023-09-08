import { TextField, Button } from '@mui/material';
import React from 'react'
import './RegisterPage.scss'
import backgroundimage from '../CoffeeShopImages/loginpagebackground.jpg';

const RegisterPage = () => {
  return (
    <>
    <div className="registerpage">
        <div className="registerform">
        
          <h1 className="registerpageheading">CoffeeShop</h1>
          <div className="textfield">
            <TextField label="Firstname" variant="outlined" className="textfield" /><br />
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Lastname" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Email" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="MobileNumber" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Password" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className="textfield"></TextField>
          </div>

          <div className="registerformbuttons">
            <Button variant="contained" color="success" size="large" style={{backgroundColor:'#694633', width: '415px' }}>
              Register
            </Button>
          </div>

        </div>

      </div>
    </>
  )
}

export default RegisterPage;