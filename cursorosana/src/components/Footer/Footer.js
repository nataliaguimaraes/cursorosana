
import React from 'react';
import { Grid, IconButton, Hidden,Container, Divider } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';

import logo from '../../assets/images/CursoImagem_1.png';

function Footer(props) {

return (
    <div className='footer'>
      <Container>
        <Grid container>
            <Grid item xs={12} lg={4} className='display-flex'>
              <img src={logo} className='image' alt=''></img>
              <Divider orientation="vertical" light  />
            </Grid>
            <Grid item xs={12} lg={4} className='display-flex'>
              <Divider orientation="vertical" variant="inset" className='background-white' />
              <img src="https://img.icons8.com/plasticine/100/000000/map-marker.png"/>
            </Grid>
            <Grid item xs={12} lg={4} className='display-flex'>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="atendimento">
                <p class="central">central de atendimento</p>
                <p class="telefone"><i class="fas fa-phone mobile"></i><span>(84)</span> 3231.1001</p>
              </div>
              <div class="midias desktop">
                <p>redes sociais</p>
                <ul>
                  <li><a href="https://www.facebook.com/OverColegioeCurso/" target="_blank"><FacebookIcon className='top-info'/></a></li>
                  <li><a href="http://www.twitter.com/OverdoseNet" target="_blank"><InstagramIcon className='top-info'/></a></li>
                </ul>
              </div>
            </div>
            </Grid>
        </Grid>
        </Container>
      </div>
)
}

export default Footer;