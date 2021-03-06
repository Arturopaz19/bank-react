import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Layout from '../layout'

export default function Branches (props) {
    const { branches, cont, bankId, callbackClick } = props
    const { results } = branches
    const selector = useSelector((state) => state.bankList)
    
    const getName = (id) => {
        let name = ''
        for(let item in selector) {
            if(id === selector[item].pk) {
                name = selector[item].name
                break
            }
        }
        return name
    }

    const list = Object.keys(results).map(key => {
        return (
            <>
            {bankId === results[key].bank &&
                <tr key={key} onClick={() => callbackClick(results[key])} >
                    <td>{results[key].id}</td>
                    <td>Sucursal {results[key].name}</td>
                    <td>Banco {getName(results[key].bank) || results[key].bank}</td>
                </tr>   
            }
            {bankId === 0 && 
                <tr key={key} onClick={() => callbackClick(results[key])} >
                    <td>{results[key].id}</td>
                    <td>Sucursal {results[key].name}</td>
                    <td>Banco {getName(results[key].bank) || results[key].bank}</td>
                </tr>
            }
            </>
        )
    })
    return (
        <Layout>
            <div className='div-title'>
                <h1>Sucursales</h1>
                <p>Selecciona la sucursal sobre la tabla.</p>
            </div>
            <Table responsive striped hover variant='dark'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Sucursal
                        </th>
                        <th>
                            Banco
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bankId === 0 &&
                        list
                    }
                    {cont !== 0 && bankId !== 0 &&
                        list
                    }
                    {cont === 0 && bankId !== 0 &&
                        <tr>
                            <td/>
                            <td>Banco seleccionado no cuenta con sucursales</td>
                            <td/>
                        </tr>
                    }
                </tbody>
            </Table>
        </Layout>
    )
}