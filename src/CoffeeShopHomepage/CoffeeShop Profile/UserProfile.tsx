import React, { useState } from 'react'
import './UserProfileStyle.scss'
import Header from '../HeaderNavigation/Header'
import Footer from '../Footer/CoffeeshopFooter'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Avatar, Button, Card, CardContent, CardHeader, IconButton, Modal, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Profile from '../CoffeeShopProducts/CoffeeProductImages/ProfilePicture.webp'

const UserProfile = () => {

    const [openModal, setOpenModal] = useState(false);
    const [newImage, setNewImage] = useState('');
    //const [profileImage, setProfileImage] = useState('../CoffeeShopProducts/CoffeeProductImages/ProfilePicture.webp');

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleImageChange = () => {
        //setProfileImage(newImage);
        handleCloseModal();
    };

    return (
        <>
            <Header />
            <div className='ProfileCard'>
                <Card className='profileDetailscard' sx={{ borderRadius: '35px', textAlign: 'center', backgroundColor: 'rgb(247, 229, 196)' }}>
                    <CardHeader className='cardheader'
                        avatar={
                            <Avatar sx={{ width: 150, height: 150, backgroundColor: 'transparent', border: '2px solid #3e2016', marginLeft: '210px' }}> {/** border: '2px solid #3498db' */}
                                <img src={Profile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Avatar>
                        }
                        action={
                            <IconButton onClick={handleOpenModal}>
                                <EditIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>

                        <TextField disabled id="outlined-disabled" label="FirstName" size='small' defaultValue="Mohan Raj" sx={{ margin: '10px' }} />
                        <TextField disabled id="outlined-disabled" label="LastName" size='small' sx={{ margin: '10px' }} defaultValue="A" />
                        <TextField id="outlined-basic" label="Mobile" variant="outlined" type='Number' size='small' sx={{ margin: '10px' }} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" size='small' sx={{ margin: '10px' }} /><br />

                        <Button variant="contained" size="large" sx={{ width: '80%', backgroundColor: '#3e2016', borderRadius: '20px', marginTop: '10px' }}>
                            My Orders
                        </Button>
                    </CardContent>
                </Card>
                <Modal open={openModal} onClose={handleCloseModal}>
                    <div className="modal">
                        <TextField
                            label="New Image URL"
                            variant="outlined"
                            fullWidth
                            value={newImage}
                            onChange={(e) => setNewImage(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleImageChange}>
                            Change Image
                        </Button>
                    </div>
                </Modal>
            </div>
            <Footer />
        </>
    )
}

export default UserProfile;