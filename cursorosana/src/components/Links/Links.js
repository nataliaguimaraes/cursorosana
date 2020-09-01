
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Links.css'

export const Links = (props) => {
    return (
        <div className='middle'>
        <Grid container className='links form'>
            <a className='link' href='https://api.whatsapp.com/send?phone=5583998372026'>
                <Button
                    data-testid='buttonWhatsapp'
                    color='primary'
                    variant='contained'
                    fullWidth
                    className='button bold'
                    >
                    Whastapp
                </Button>
            </a>
            <Link to={{pathname:'/preMatricula'}} className='link bold margin-top-15'>
                <Button
                    data-testid='buttonPreMatricula'
                    color='primary'
                    variant='contained'
                    fullWidth
                    className='button bold'
                    >
                    Pré-matrícula
                </Button>    
            </Link>
            <Link to={{pathname:'/home'}} className='link bold margin-top-15'>
                <Button
                    data-testid='buttonSite'
                    color='primary'
                    variant='contained'
                    fullWidth
                    className='button bold'
                    >
                    Home
                </Button>    
            </Link>  
        </Grid>
        </div>)
}