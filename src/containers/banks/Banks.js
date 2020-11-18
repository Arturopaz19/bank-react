import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBanks, bankSelected } from '../../redux/actions/banks'

import Banks from '../../components/banks/'

const API = 'https://tryouts-cumplo.herokuapp.com'
const banksRoute = '/banks/'

export default function BankContainer () {
    const [banks, setBanks] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch(`${API}${banksRoute}`)
                if (response.ok) {
                    const resp = await response.json()
                    setBanks(resp)
                    dispatch(addBanks(resp))
                } else {
                    setBanks([])
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
        history.push('/branches')
    }

    return (
        <Banks banks={banks} callbackClick={cardClicked}/>
    )
}