import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container , Grid} from '@material-ui/core';
import TopHeader from '../components/Header/TopHeader';
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  margin: {
    [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
  },
  },
}));


export const MainLayout = ({ children }) => {
  const classes = useStyles();
  
  return (
    <>
    <TopHeader/>
    <Container component='main'>
      <Grid className='opacity container'>
        <Header/>
        <main className='content'></main>
        {/* colocar o container aqui... dar um jeito */}
        <div className={classes.margin}> 
          {children}
        </div>
        </Grid>
    </Container>
    <Footer/>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}