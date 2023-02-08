import { GET_ALL_ORDERS } from "../type";

const initial = {
     getAllOrders: [],
}

const orderReducer = (state = initial, action) => {

     switch(action.type)
     {
          case GET_ALL_ORDERS:
               return{
                    ...state, 
                    getAllOrders: action.payload, 
               }
          default:
               return state;
     }
}

export default orderReducer