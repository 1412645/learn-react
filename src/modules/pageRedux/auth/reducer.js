import { REHYDRATE } from 'redux-persist'

const initState = {
  name: 'Le Hoang Vu',
  address: 'Dong Nai',
  infors: {
    old: 25,
    habbit: 'play soccer',
    love: true,
    subInfor: {
      test: 'test',
      test1: 'test1'
    }
  }
}

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    // case REHYDRATE: 
    //   return {
    //     ...state,
    //     address: action.payload.address
    //   }
    default:
      return state
  }
}

export default AuthReducer