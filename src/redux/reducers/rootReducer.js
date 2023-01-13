//All reducers will be combined and exported to store.js without send them seperately 

import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";

export default combineReducers({
     allCategory: categoryReducer,
     allBrand: brandReducer

})

