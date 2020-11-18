import React from 'react'
import Layout from '../layout'
import { Row, Col, Card } from 'react-bootstrap'

export default function Banks (props) {
    const { banks, callbackClick } = props
    const list = Object.keys(banks).map(key => {
        return (
            <Col key={key} className='bank-col' xs={12} sm={6} md={6} lg={6}>
                <Card className='bank-card' onClick={() => callbackClick(banks[key].pk)}>
                    <Card.Title>Informacion del Banco:</Card.Title>
                    <Card.Body>
                        <h5>Identificador: {banks[key].pk}</h5>
                        <h5>Banco {banks[key].name}</h5>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <Layout>
            <div className='div-title'>
                <h1>Bancos</h1>
            </div>
            <Row className='bank-row'>
                {list}
            </Row>
        </Layout>
    )
}