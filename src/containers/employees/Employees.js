import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import Employees from '../../components/employees'
import Layout from '../../components/layout/'

const API = 'https://tryouts-cumplo.herokuapp.com'
const employeesRoute = '/employees/'

export default function EmployeesContainer () {
    const [employees, setEmployees] = useState({})
    const [loading, setLoading] = useState(true)
    const [isAsc, setIsAsc] = useState(true)
    const [page, setPage] = useState(1)
    const [isShow, setIsShow] = useState(false)
    const branch = useSelector((state) => state.branch)

    const fetchEmployees = async (url) => {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const resp = await response.json()
                setEmployees(resp)
                setLoading(false)
            } else {
                setEmployees({})
                setLoading(false)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    const handleFilter = (isAsc) => {
        setIsAsc(isAsc)
    }

    useEffect(() => {
        setLoading(true)
        fetchEmployees(`${API}${employeesRoute}?branch=${branch.id}&page=${page}&ordering=${isAsc ? 'pk' : '-pk'}`)
    }, [isAsc, page])

    const settingPage = (page) => {
        setPage(page)
    }

    const handleModal = (isShow) => {
        setIsShow(isShow)
    }

    const handleUpdate = () => {
        setLoading(true)
        setIsShow(false)
        fetchEmployees(`${API}${employeesRoute}?branch=${branch.id}&page=${page}&ordering=${isAsc ? 'pk' : '-pk'}`)
    }

    return (
        <>
        {loading &&
            <Layout>
                <Spinner className='spinner-animated' animation='border' variant='secondary' />
            </Layout>
        }
        {!loading && Object.keys(employees).length > 0 &&
            <Employees 
                employees={employees} 
                branch={branch} 
                isAsc={isAsc} 
                callbackFilter={handleFilter} 
                callbackPage={settingPage}
                page={page}
                isShow={isShow}
                callbackModal={handleModal}
                callbackUpdate={handleUpdate}
            />
        }
        {!loading && Object.keys(employees).length === 0 &&
            <Layout>
                <div className='div-title'>
                    <h1>No se encontro información</h1>
                </div>
            </Layout>
        }
        </>
    )
}