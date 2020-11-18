const ADD = 'ADD'
const SELECTED = 'SELECTED'

export const addBanks = (banks) => ({
   type: ADD,
   data: banks
})

export const bankSelected = (id) => ({
    type: SELECTED,
    data: id
})