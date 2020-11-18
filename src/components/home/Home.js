import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../layout/HomeLayout'

export default function Home () {
    return (
        <Layout>
            <Jumbotron className='home-jumbotron'>
                <div className='home-section'>
                    <h1>¡Bienvenido a tu sistema bancario!</h1>
                    <p>
                        En el podras encontrar información del banco, sus sucursales asociadas y los empleados que se encuentran en dicha sucursal.
                    </p>
                    <p>
                        En la vista de Bancos tu puedes:
                    </p>
                    <ul>
                        <li>Listar Bancos</li>
                        <li>Seleccionar el banco para poder acceder a sus sucursales</li>
                    </ul>
                    <p>
                        En la vista de Sucursales tu puedes:
                    </p>
                    <ul>
                        <li>Listar Sucursales</li>
                        <li>Seleccionar alguna para ver su información</li>
                    </ul>
                    <p>
                        En la vista de Empleados tu puedes:
                    </p>
                    <ul>
                        <li>Listar Empleados correspondientes a una sucursal</li>
                        <li>Ordenarlos de forma ascendente y descendente</li>
                        <li>Puedes agregar nuevos empleados en la sucursal que desees.</li>
                    </ul>
                </div>
            </Jumbotron>
        </Layout>
    )
}