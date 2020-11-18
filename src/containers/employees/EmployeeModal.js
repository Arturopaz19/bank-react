import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import RenderAlert from '../../components/common/RenderAlert'
import { validateWord } from '../../helpers/validate'
import { useSelector } from 'react-redux'

const API = 'https://tryouts-cumplo.herokuapp.com'
const employeesRoute = '/employees/'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

export default function Employee (props) {
    const classes = useStyles()
    const { isShow, callbackModal, callbackUpdate } = props
    const [name, setName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [formDisabled, setFormDisabled] = useState(true)

    const branch = useSelector((state) => state.branch)

    const handleModal = () => callbackModal(!isShow)

    const updateRegisters = () => callbackUpdate()

    useEffect(() => {
        const isFormValid = () => {
            if(name.trim().length >= 3 && middleName.trim().length >= 3 && lastName.trim().length >=2) {
                setFormDisabled(false)
            } else {
                setFormDisabled(true)
            }
        }

        isFormValid()
    }, [name, middleName, lastName])

    const fetchPostEmployee = async (body) => {
        try {
            const url = `${API}${employeesRoute}`
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if (request.ok) {
                const data = await request.json()
                return data
            } else {
                const rqt = await request.json()
                return { bad: !request.ok, status: request.status, error: rqt }
            }
        } catch (error) {
            return { bad: true, status: 500, error: error.message }
        }
    }

    const addEmployee = async (e) => {
        e.preventDefault()
        try {
            const response = await fetchPostEmployee({ "name": name.trim(), "middle_name": middleName.trim(), "last_name": lastName.trim(), "branch": branch.id })
            if (!response.bad) {
                RenderAlert(true, 'El empleado se registro de forma correcta.')
                updateRegisters()
            } else {
                RenderAlert(false, JSON.stringify(response.error))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Modal show={isShow} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={classes.root} onSubmit={formDisabled ? null : (e) => addEmployee(e)}>
                    <Form.Group>
                        <TextField
                            error={name === '' ? false : name.trim().length < 3 ? true : !validateWord(name) ? true : false}
                            id='name'
                            name='name'
                            label='Primer nombre: *'
                            value={name}
                            onChange={(e) => setName(prevState => validateWord(e.target.value.trimStart()) ? e.target.value.trimStart() : prevState)}
                            helperText={name === '' ? '' : name.trim().length < 3 ? 'El nombre debe tener por lo menos 3 caracteres' : !validateWord(name) ? 'No se permiten simbolos y números.'  : ''}
                        />
                        <TextField
                            error={middleName === '' ? false : middleName.trim().length < 3 ? true : !validateWord(middleName) ? true : false}
                            id='middle-name'
                            name='middleName'
                            label='Segundo nombre: *'
                            value={middleName}
                            onChange={(e) => setMiddleName(prevState => validateWord(e.target.value.trimStart()) ? e.target.value.trimStart() : prevState)}
                            helperText={middleName === '' ? '' : middleName.trim().length < 3 ? 'El segundo nombre debe tener por lo menos 3 caracteres' : !validateWord(middleName) ? 'No se permiten simbolos y números.' : ''}
                        />
                    </Form.Group>
                    <Form.Group>
                        <TextField
                            error={lastName === '' ? false : lastName.trim().length < 2 ? true : !validateWord(lastName) ? true : false}
                            id='last-name'
                            name='lastName'
                            label='Apellidos: *'
                            value={lastName}
                            onChange={(e) => setLastName(prevState => validateWord(e.target.value.trimStart()) ? e.target.value.trimStart() : prevState)}
                            helperText={lastName === '' ? '' : lastName.trim().length < 2 ? 'El apellido debe tener por lo menos 2 caracteres' : !validateWord(lastName) ? 'No se permiten simbolos y números.' : ''}
                        />
                    </Form.Group>
                    <Form.Group className='form-buttons'>
                        <Button variant='secondary' onClick={handleModal}>
                            Cerrar
                        </Button>
                        <Button variant='primary' disabled={formDisabled} type='submit'>
                            Guardar
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}