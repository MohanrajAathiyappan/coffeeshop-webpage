import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, InputAdornment, TextField } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './HeaderStyle.scss'

//header
const pages = ['Our Coffee', 'Pricing',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  //
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //

  return (
    <>
    <div className='headercomponent'>
      <AppBar position="static" sx={{ backgroundColor: '#3e2016', color: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CoffeeOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CoffeeShop
            </Typography>

{/* endIcon={<ShoppingCartOutlinedIcon />} */}
            <TextField size='small' type='text' placeholder='Search Coffee' style={{ height: 'auto', width: '35%', borderRadius: '5px', marginLeft: '18%', backgroundColor: 'wheat', borderColor: 'wheat' }} />

            {/* Notification and Message icon*/}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={7} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={3} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

            </Box>

            {/*if we give flex as - 0 means it goes to extreme right
          *If we give flexGrow:1 or 2 it come to left side
          */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, paddingLeft: '15px' }}>
                  <Avatar alt="Remy Sharp" sx={{ backgroundColor: '#694633' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>Account</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><Link to='/' style={{textDecoration:'none',color:'#3e2016',fontWeight:'600'}}>Logout</Link></MenuItem>
             
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
    </>
  )
}

export default Header;
