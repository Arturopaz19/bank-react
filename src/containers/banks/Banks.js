import React, { useState, useEffect } from 'react'
import Banks from '../../components/banks/'
const API = 'https://tryouts-cumplo.herokuapp.com'
const banksRoute = '/banks/'

export default function BankContainer () {
    const [banks, setBanks] = useState({})

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch(`${API}${banksRoute}`)
                if (response.ok) {
                    const resp = await response.json()
                    setBanks(resp)
                } else {
                    setBanks({})
                }
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchBanks()
    }, [])

    return (
        <Banks banks={banks}/>
    )
}