import { Button, TextField } from '@mui/material';
import './forgetPasswordStyle.scss'
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

//function should start in capital letter
const ForgetPasswordPage = () => {
    //Hooks
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const Navigate = useNavigate();

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

    //function
    const HandleForgetPassword = (e: any) => {
        e.preventDefault();

        const formData = new FormData;
        let userId: string | null = localStorage.getItem('id');

        if (userId != null) {
            formData.append('id', userId);
            formData.append('oldPassword', currentPassword);
            formData.append('newPassword', newPassword);
            formData.append('confirmPassword', confirmPassword);
        }
        axios.put('https://localhost:7142/api/Coffeeshop/ChangePassword', formData)
            .then((resp) => {
                console.log(resp.data);
                Toast.fire({
                    icon: 'success',
                    title: 'Password Changed'
                })
                Navigate('/Homepage');
            })
            .catch(x =>
                Toast.fire({
                    icon: 'error',
                    title: 'Password not matched'
                })
            )

    }
    return (
        <>
            <div className='forgetpassword'>
                <div className='forgetpasswordform'>
                    <h1 className="forgetPasswordheading">Forget Password</h1>

                    <div className="forgetPasswordtextfield">
                        <TextField
                            label="Current Password"
                            variant="outlined"
                            className="textfield"
                            onChange={(e: any) => setCurrentPassword(e.target.value)}
                        />
                        <br />
                    </div>

                    <div className="forgetPasswordtextfield">
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="New Password"
                            variant="outlined"
                            className="textfield"
                            onChange={(e: any) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div className="forgetPasswordtextfield">
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            className="textfield"
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="forgetPasswordbuttons">
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            className="loginformbuttons"
                            style={{ backgroundColor: "#694633" }}
                            onClick={HandleForgetPassword}
                        >
                            Change Password
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ForgetPasswordPage;
