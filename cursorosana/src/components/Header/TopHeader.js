
import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './TopHeader.css';

function TopHeader(props) {

return (
    <div>
        <Grid container className='top-header'>
            <Grid item>
              <IconButton
                  className='padding-top-10'
                  edge="end">
                <InstagramIcon className='top-info'/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                  className='padding-top-10' 
                  edge="end">
                <FacebookIcon className='top-info'/>
              </IconButton>
            </Grid>
            <Grid item >
                <ul>
                <li><p><PhoneIcon className='top-info'/></p></li>
                <li><p className='font-top-header'>(83) 3031-4598 </p></li>
                </ul>
            </Grid>
            <Grid item>
                <ul>
                    <li><p><MailOutlineIcon className='top-info'/></p></li>
                    <li><p className='font-top-header'>cursorosana@outlook.com </p></li>
                </ul>
            </Grid>
        </Grid>
      </div>
)
}

export default TopHeader;