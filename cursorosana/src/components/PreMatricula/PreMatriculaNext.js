import React, { useState } from 'react'
import { TextField, Grid, Divider, Button } from '@material-ui/core'
import './PreMatricula.css'


export const PreMatriculaNext = (props) => {
    const [responsavel, setResponsavel] = useState('')
    const [emailResponsavel, setEmailResponsavel] = useState('')
    const [celularResponsavel, setCelularResponsavel] = useState('')
    const [emailResponsavelInvalido, setEmailResponsavelInvalido] = useState(false)
    const [celularResponsavelInvalido, setCelularResponsavelInvalido] = useState(false)


    const onClick = () => {

        if (isEmailInvalid(emailResponsavel)) {
            setEmailResponsavelInvalido(true);
        } else {
            setEmailResponsavelInvalido(false);
        }

        if (isTelephoneInvalid(celularResponsavel)) {
            setCelularResponsavelInvalido(true);
        } else {
            setCelularResponsavelInvalido(false);
        }

    }
    
    
    function isEmailInvalid(email) {
        return !/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }

    function isTelephoneInvalid(telephone) {
        const tel = telephone.replace(/([()-])/g, '');
        return !(tel.length === 11 && /^[0-9.]+$/.test(tel));
    }

    return (<>
            <Grid >
                <p className="titulo">Faça sua pré-matricula agora</p>
                <p className="text">Venha para o curso da Prof. Rosana!</p>
               
                <Divider className='margin-top-2'/>
                <div className='form'>
                <div className='margin-top-5'> <span >Informações do Responsável</span></div>
                <TextField
                className='margin-top-2'
                data-testid='textField1'
                variant='outlined'
                label='Nome do Responsável'
                fullWidth
                required
                onChange={e => setResponsavel(e.target.value)}
                inputProps={{
                    'data-testid': 'inputField1',
                    type: 'name',
                }}
                ></TextField>

                <TextField
                className='margin-top-5'
                data-testid='textField2'
                variant='outlined'
                label='Telefone'
                helperText={celularResponsavelInvalido ? 'celular inválido' : ''}
                error={celularResponsavelInvalido}
                fullWidth
                required
                onChange={e => setCelularResponsavel(e.target.value)}
                inputProps={{
                    'data-testid': 'inputField2',
                    type: 'text',
                }}
                ></TextField>

                <TextField
                className='margin-top-5'
                data-testid='textField3'
                variant='outlined'
                label='E-mail do aluno'
                helperText={emailResponsavelInvalido ? 'E-mail inválido' : ''}
                error={emailResponsavelInvalido}
                fullWidth
                required
                onChange={e => setEmailResponsavel(e.target.value)}
                inputProps={{
                    'data-testid': 'inputField3',
                    type: 'email',
                }}
                ></TextField>
                
                <Button
                data-testid='buttonNext'
                color='primary'
                variant='contained'
                fullWidth
                className='next-button bold margin-top-5'
                onClick={onClick}
                >
                SUBMIT
                </Button>
                </div>
            </Grid>

    </>)
        

}
