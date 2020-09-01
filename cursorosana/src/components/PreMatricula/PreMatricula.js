import React, { useState } from 'react'
import { TextField, Grid, MenuItem, 
        InputLabel, FormControl, 
        Select, Divider, Button } from '@material-ui/core'
import './PreMatricula.css'


export const PreMatricula = (props) => {
    const [aluno, setAluno] = useState('')
    const [emailAluno, setEmailAluno] = useState('')
    const [celularAluno, setCelularAluno] = useState('')
    const [emailAlunoInvalido, setEmailAlunoInvalido] = useState(false)
    const [celularAlunoInvalido, setCelularAlunoInvalido] = useState(false)
    const [interesse, setInteresse] = useState('')
    const [curso, setCurso] = useState('')
    const [from, setFrom] = useState('')


    const onClick = () => {

        if (isEmailInvalid(emailAluno)) {
            setEmailAlunoInvalido(true);
        } else {
            setEmailAlunoInvalido(false);
        }

        if (isTelephoneInvalid(celularAluno)) {
            setCelularAlunoInvalido(true);
        } else {
            setCelularAlunoInvalido(false);
        }

        if(emailAlunoInvalido && celularAlunoInvalido){
            const { history } = props;
            if (history) {
                history.push({
                pathname: '/preMatriculaNext',
                state: { aluno: aluno, 
                    emailAluno: emailAluno,
                    celularAluno: celularAluno,
                    interesse: interesse,
                    curso: curso,
                    from: from, 
                    },
                });
            }
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
                <p className="titulo">Faça agora sua prématrícula no intensivo ENEM 2020.</p>
                <p className="text">Venha para o curso da Prof. Rosana!</p>
               
                <Divider className='margin-top-2'/>
                <div className='form'>
                <div className='margin-top-5'> <span >Informações do Aluno</span></div>
                <TextField
                className='margin-top-2'
                data-testid='textField1'
                variant='outlined'
                label='Nome do aluno'
                fullWidth
                required
                onChange={e => setAluno(e.target.value)}
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
                helperText={celularAlunoInvalido ? 'celular inválido' : ''}
                error={celularAlunoInvalido}
                fullWidth
                onChange={e => setCelularAluno(e.target.value)}
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
                helperText={emailAlunoInvalido ? 'E-mail inválido' : ''}
                error={emailAlunoInvalido}
                fullWidth
                onChange={e => setEmailAluno(e.target.value)}
                inputProps={{
                    'data-testid': 'inputField3',
                    type: 'email',
                }}
                ></TextField>
                
                <FormControl variant="outlined" className='margin-top-5 form-control'>
                    <InputLabel id="selectLabel1">Área de interesse</InputLabel>
                    <Select
                    labelId="selectLabel1"
                    id="selectField1"
                    value={interesse}
                    onChange={e => setInteresse(e.target.value)}
                    label="Área de interesse"
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={1}>Medicina</MenuItem>
                        <MenuItem value={2}>Ciências Humanas</MenuItem>
                        <MenuItem value={3}>Ciências Exatas</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className='margin-top-5 form-control'>
                    <InputLabel id="selectLabel2">Curso</InputLabel>
                    <Select
                    labelId="selectLabel2"
                    id="selectField2"
                    value={curso}
                    onChange={e => setCurso(e.target.value)}
                    label="Área de interesse"
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={1}>Intensivo ENEM noite</MenuItem>
                        <MenuItem value={2}>Intensivo ENEM Fim de semana</MenuItem>

                    </Select>
                </FormControl>

                <TextField
                className='margin-top-5'
                data-testid='textField6'
                variant='outlined'
                label='De onde você nos conhece?'
                fullWidth
                onChange={e => setFrom(e.target.value)}
                inputProps={{
                    'data-testid': 'inputField6',
                    type: 'text',
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
                PRÓXIMO
                </Button>
                </div>
            </Grid>

    </>)
        

}
