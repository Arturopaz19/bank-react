const initData = []

const bankList = (state = initData, action) => {
   switch (action.type) {
      case 'ADD':
         return action.data
      default: 
         return state
   }
} 

export default bankList