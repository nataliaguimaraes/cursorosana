
import React from 'react';
import { Grid,Container } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import './Footer.css';

import logo from '../../assets/images/logo_branco.png';

function Footer(props) {

return (
    <div className='footer'>
      <Container>
        <Grid container spacing={5}>
            <Grid item xs={12} lg={4} className='display-flex border-right'>
            <div className='border-bottom'>
              <img src={logo} className='image' alt=''></img>
             </div>
            </Grid>
            <Grid item xs={12} lg={4} className='border-right'>
            <div className='border-bottom'>
              <img className='image-2' src="https://img.icons8.com/plasticine/100/000000/map-marker.png"/>
              <p className="font-footer">Av. João Câncio 1492, Manaíra</p>
             </div>
            </Grid>
            <Grid item xs={12} lg={4} className=''>
              <div className='border-bottom-lg'>
                <p className="font-footer">central de atendimento</p>
                <p className="font-footer telefone"><span>(83)</span> 3031.4598</p>
                <p className="font-footer telefone"><span>(83)</span> 99837.2026</p>
             </div>
              <div className="midias desktop border-bottom">
                <p className='font-footer font-12'>redes sociais</p>
                <ul className='margin'>
                  <li><a href="https://www.facebook.com/CursoProfRosana" target="_blank"><FacebookIcon className='icon'/></a></li>
                  <li><a href="https://www.instagram.com/cursorosana/" target="_blank"><InstagramIcon className='icon'/></a></li>
                  <li><a href="https://api.whatsapp.com/send?phone=5583998372026" target="_blank"><WhatsAppIcon className='icon'/></a></li>
                </ul>
            </div>
            </Grid>
        </Grid>
        </Container>
      </div>
)
}

export default Footer;