import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBanks, bankSelected } from '../../redux/actions/banks'
import { branchSelected } from '../../redux/actions/branches'

import Banks from '../../components/banks/'
import Layout from '../../components/layout'

const API = 'https://tryouts-cumplo.herokuapp.com'
const banksRoute = '/banks/'

export default function BankContainer () {
    const [banks, setBanks] = useState({})
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch(`${API}${banksRoute}`)
                if (response.ok) {
                    const resp = await response.json()
                    setBanks(resp)
                    setLoading(false)
                    dispatch(addBanks(resp))
                } else {
                    setBanks([])
                    setLoading(false)
                    dispatch(addBanks([]))
                }
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchBanks()
    }, [])

    const cardClicked = (id) => {
        dispatch(bankSelected(id))
        dispatch(branchSelected({}))
        history.push('/branches')
    }

    return (
        <>
        {loading &&
            <Layout>
                <Spinner className='spinner-animated' animation='border' variant='secondary' />
            </Layout>
        }
        {!loading &&
            <Banks banks={banks} callbackClick={cardClicked}/>
        }
        </>
    )
}