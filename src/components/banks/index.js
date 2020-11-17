import React from 'react'
import Layout from '../layout'
import { Row, Col, Card } from 'react-bootstrap'

export default function Banks (props) {
    const { banks } = props
    console.log(banks)
    const list = Object.keys(banks).map(key => {
        return (
            <Col className='bank-col' xs={12} sm={6} md={6} lg={6}>
                <Card className='bank-card'>
                    <Card.Body>
                        <h4>{banks[key].pk}.- {banks[key].name}</h4>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <Layout>
            <h1>Bancos</h1>
            <Row className='bank-row'>
                {list}
            </Row>
        </Layout>
    )
}