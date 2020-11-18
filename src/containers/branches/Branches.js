import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Branches from '../../components/branches/'
import Layout from '../../components/layout'

const API = 'https://tryouts-cumplo.herokuapp.com'
const branchRoute = '/branches/'

export default function BranchContainer () {
    const [branches, setBranches] = useState({})
    const [loading, setLoading] = useState(true)
    const [cont, setCont] = useState(0)
    const bankId = useSelector((state) => state.bank)

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await fetch(`${API}${branchRoute}`)
                if (response.ok) {
                    const resp = await response.json()
                    setBranches(resp)
                    setLoading(false)
                } else {
                    setBranches({})
                    setLoading(false)
                }
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchBranches()
    }, [])

    useEffect(() => {
        const list = branches.results
        for(let i in list) {
            if (bankId === list[i].bank) {
                setCont(prevState => prevState + 1)
            }
        }
    }, [branches])

    return (
        <>
        {loading &&
            <Layout>
                <Spinner animation="border" variant="primary" />
            </Layout>
        }
        {!loading &&
            <Branches branches={branches} cont={cont} bankId={bankId} />
        }
        </>
    )
}