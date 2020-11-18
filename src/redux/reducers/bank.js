const initData = 0

const bank = (state = initData, action) => {
   switch (action.type) {
      case 'SELECTED':
         return action.data
      default: 
         return state
   }
} 

export default bank