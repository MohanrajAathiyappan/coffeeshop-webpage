import { TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import './RegisterPage.scss'
import backgroundimage from '../CoffeeShopImages/loginpagebackground.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const RegisterPage = () => {
  //Hooks
  const[firstname,setFirstname]=useState<string>('')
  const[lastname,setLastname]=useState<string>('')
  const[emailid,setEmail]=useState<string>('')
  const[phoneNumber,setPhoneNumber]=useState<string>('')
  const[password,setPassword]=useState<string>('')
  const[confirmpassword,setConfirmpassword]=useState<string>('')
  const Navigate=useNavigate();

  //alert
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  //function for register button
  const HandleRegister=(e:any)=>{
    e.preventDefault();

    //calling register interface and setting in const -> left side belong to interface name, right side belongs to hooks
    const UserRegister:ICofeeshopUserRegister={
      firstname: firstname,
      lastname: lastname,
      emailAddress: emailid,
      phoneNumber: phoneNumber,
      password: password
    }

    axios.post('https://localhost:7142/api/Coffeeshop/UserRegistration',UserRegister).then(()=>{
      if(firstname!=null && lastname!=null && emailid!=null && password!=null )
      {
        Toast.fire({
          icon: 'success',
          title: 'User Registered'
        })
        Navigate('/');
      }
      else{
        Toast.fire({
          icon: 'error',
          title: 'Fill all the details'
        })
      }
    })
    .catch(x=>
      Toast.fire({
        icon: 'error',
        title: 'Fill all the details'
      })
    )
  }

  return (
    <>
    <div className="registerpage">
        <div className="registerform">
        
          <h1 className="registerpageheading">CoffeeShop</h1>
          <div className="textfield">
            <TextField label="Firstname" variant="outlined" className="textfield" onChange={(e:any)=>setFirstname(e.target.value)}/><br />
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Lastname" variant="outlined" className="textfield" onChange={(e:any)=>setLastname(e.target.value)}></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Email" variant="outlined" className="textfield" onChange={(e:any)=>setEmail(e.target.value)}></TextField>
          </div>

          {/* <div className="textfield">
            <TextField id="outlined-basic" label="MobileNumber" variant="outlined" className="textfield"></TextField>
          </div> */}

          <div className="textfield">
            <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" className="textfield" onChange={(e:any)=>setPhoneNumber(e.target.value)}></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Password" variant="outlined" className="textfield" onChange={(e:any)=>setPassword(e.target.value)}></TextField>
          </div>

          <div className="textfield">
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className="textfield" onChange={(e:any)=>setConfirmpassword(e.target.value)}></TextField>
          </div>

          <div className="registerformbuttons">

            <Button variant="contained" color="success" size="large" onClick={HandleRegister} style={{backgroundColor:'#694633', width: '415px' }}>
              Register
            </Button>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default RegisterPage;