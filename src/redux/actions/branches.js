const BRANCHSELECTED = 'BRANCHSELECTED'

export const branchSelected = (id) => ({
    type: BRANCHSELECTED,
    data: id
})