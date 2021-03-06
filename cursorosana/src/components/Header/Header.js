import React from 'react';
import PropTypes from 'prop-types';
import { Button, Drawer, Hidden, Tab, Tabs, List, ListItem, Toolbar, ListItemText, IconButton,   } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import './Header.css';

import logo from '../../assets/images/CursoImagem_1.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
        // flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      //width: `calc(100% - ${drawerWidth}px)`,
     // marginRight: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  
}));


export const Header = (props) => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      
      <List component="nav" aria-label="secondary mailbox folders">
      <ListItem href='/home'>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem href='/curso'>
          <ListItemText primary="o curso" />
        </ListItem>
        <ListItem href="/professores">
          <ListItemText primary="Professores" />
        </ListItem>
        <ListItem href="/faleConosco">
          <ListItemText primary="Fale Conosco" />
        </ListItem>
        <ListItem href="/preMatricula">
          <ListItemText primary="Pré-matrícula" />
        </ListItem>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <div>
        <div className="wrapper">
        <div className="left"><img src={logo} className='image' alt=''></img></div>
          <div className="right margin-top-5">
            <Toolbar>
              <Hidden smDown>
                <Tabs
                      className='tabs'
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered>
                    <Tab
                    className="menu-button"
                    component="a"
                    label="Home"
                    href="/home"
                    {...props}/>
                    <Tab
                    className="menu-button"
                    component="a"
                    label="o curso"
                    href="/curso"
                    {...props}/>
                    <Tab
                    className="menu-button"
                    component="a"
                    href="/professores"
                    label="Professores"
                    {...props}/>  
                    <Tab
                    className="menu-button"
                    component="a"
                    href="/faleConosco"
                    label="Fale conosco"
                    {...props}/>    
                  </Tabs>
                  <Link to={{pathname:'/preMatricula'}}>
                  <Button
                  data-testid='buttonNext'
                  color='primary'
                  variant='contained'
                  className='pre-matricula-button '
                  >
                  Pré-matrícula
                  </Button></Link>
                </Hidden>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                  >
                  <MenuIcon className="menu-icon"/>
                </IconButton>
              </Toolbar>
          </div>
        </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor='right'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    
    </div>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


