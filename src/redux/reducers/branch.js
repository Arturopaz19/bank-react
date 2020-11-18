const initData = {}

const branch = (state = initData, action) => {
   switch (action.type) {
      case 'BRANCHSELECTED':
         return action.data
      default: 
         return state
   }
} 

export default branch