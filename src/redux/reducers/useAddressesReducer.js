import { ADD_USER_ADDRESSES, DELETE_USER_ADDRESSES, GET_ALL_USER_ADDRESSES, GET_ONE_USER_ADDRESSES, UPDATE_USER_ADDRESSES } from "../type";

const initial = {
     addUserAddresses: [],
     allAddresses: [],
     deleteAddress: [],
     oneAddress: [],
     updateAddress: []

}

const userAddressesReducer = (state = initial, action) => {

     switch(action.type)
     {
          case ADD_USER_ADDRESSES:
               return{
                    ...state, 
                    addUserAddresses: action.payload,
               }
          case GET_ALL_USER_ADDRESSES:
               return{
                    ...state, 
                    allAddresses: action.payload,
               }
          case DELETE_USER_ADDRESSES:
               return{
                    ...state, 
                    deleteAddress: action.payload,
               }
          case GET_ONE_USER_ADDRESSES:
               return{
                    ...state, 
                    oneAddress: action.payload,
               }
          case UPDATE_USER_ADDRESSES:
               return{
                    ...state, 
                    updateAddress: action.payload,
               }
          default:
               return state;
     }
}


export default userAddressesReducer