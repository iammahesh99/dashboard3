import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChatIcon from '@material-ui/icons/Chat';
import clsx from 'clsx';
import {
  Route,
  Link
} from "react-router-dom";
import Chatbot from '../Component/Chatbot';




const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {

    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {

    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },



//For Drawer
  drawer: {
    width: drawerWidth,

    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#CD5C5C',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4a4a4a',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

//For Menu button
menuButton: {
    marginRight: theme.spacing(2),
  },
  

//For appbar shift
   appBar: {
    backgroundColor: '#4a4a4a',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },







}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
 const [role, setRole] = React.useState('StoreAssociate');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const open2 = Boolean(anchorE2);
  

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMessageMenuOpen = event => {
    setAnchorE2(event.currentTarget);
  };
  const handleMessageMenuClose = event => {
    setAnchorE2(null);
  };


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };




  const handleDrawerOpen = () => {

   
    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log("Clicked");
    setOpen(false);
  };






  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    

      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

      <MenuItem > <button 
                  onClick={props.onLogout}>
                  Log Out
                  </button>
        </MenuItem>
    </Menu>
  );



const MessagemenuId = 'primary-message-account-menu';
  const renderMessage = (
    <Menu
      anchorE2={anchorE2}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      id={MessagemenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open2}
      onClose={handleMessageMenuClose}
    >
      <Chatbot />
    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

    <MenuItem onClick={handleMessageMenuOpen}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          
            <ChatIcon />
          
        </IconButton>
        <p>Messages</p>
      </MenuItem>


      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>


      



      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>



    </Menu>
  );


  return (
    <div className={classes.grow}>
      <AppBar 
      position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}

            
            className={clsx(classes.menuButton, open )}
          >



            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Menu
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {role=='StoreAssociate'?
          <IconButton aria-label="show 4 new mails"
          onClick={handleMessageMenuOpen}
           color="inherit">
              
                <ChatIcon />
              
            </IconButton>:null}
            
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>{props.user.displayName}</p>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              
              <img
                width='32'
                className='avatar circle responsive-img'
                src={props.user.photoURL}
              />
              
            </IconButton>

            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>



          <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              
              classes={{
                paper: classes.drawerPaper,
              }}
            >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
            <ListItem button >
            <Link to="/" style={{ textDecoration: 'none',color:'black'}}>
              <ListItemText primary='Home' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Order" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Order' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Inventory" style={{ textDecoration: 'none',color:'black'}}>
              <ListItemText primary='Inventory' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Shipment" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Shipment' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Report" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Report' />
              </Link>
              
            </ListItem>
            
            
          
        </List>
        <Divider />
        
      </Drawer>

      {renderMobileMenu}
      {renderMenu}
      {renderMessage}
    </div>
  );
}