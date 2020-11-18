import React from 'react'
import { Table, Row, Col, Modal, Button } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/AddCircle'
import ArrowDown from '@material-ui/icons/ArrowDownward'
import ArrowUp from '@material-ui/icons/ArrowUpward'
import Pagination from '@material-ui/lab/Pagination'

import Layout from '../layout'
import EmployeeModal from '../../containers/employees/EmployeeModal'

export default function Employees (props) {
    const { employees, branch, isAsc, callbackFilter, page, callbackPage, isShow, callbackModal, callbackUpdate } = props
    const { count, results } = employees
    
    const handleChange = (event, value) => {
        callbackPage(value)
    }

    const handleModal = (event) => callbackModal(event)

    const handleUpdate = () => callbackUpdate()

    const list = Object.keys(results).map(key => {
        return (
            <tr key={key}>
                <td>{results[key].id}</td>
                <td>{results[key].name}</td>
                <td>{results[key].middle_name}</td>
                <td>{results[key].last_name}</td>
            </tr>
        )
    })
    return (
        <Layout>
            <div>
                <h3>Sucursal: {branch.id} - {branch.name}</h3>
            </div>
            <Row>
                <Col xs={6} sm={6} md={8} lg={8}>
                    <h1>Empleados</h1>
                </Col>
                <Col xs={3} sm={3} md={2} lg={2}>
                    <IconButton aria-label='add-employee' component='span' onClick={handleModal}>
                        <Add />
                    </IconButton>
                </Col>
                <Col xs={3} sm={3} md={2} lg={2}>
                    {isAsc &&
                        <IconButton aria-label='desc-filter' component='span' onClick={() => callbackFilter(!isAsc)}>
                            <ArrowDown />
                        </IconButton>
                    }
                    {!isAsc &&
                        <IconButton aria-label='asc-filter' component='span' onClick={() => callbackFilter(!isAsc)}>
                            <ArrowUp />
                        </IconButton>
                    }
                </Col>
            </Row>
            <Table responsive hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Primer Nombre</th>
                        <th>Segundo Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
            <Pagination 
                count={count/5 > parseInt(count/5) ? parseInt(count/5)+1 : count/5} 
                page={page} 
                onChange={handleChange} 
            />
            {isShow &&
                <EmployeeModal 
                    isShow={isShow}
                    callbackModal={handleModal}
                    callbackUpdate={handleUpdate}
                />
            }
        </Layout>
    )
}