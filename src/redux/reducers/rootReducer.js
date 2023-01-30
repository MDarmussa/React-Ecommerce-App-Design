//All reducers will be combined and exported to store.js without send them seperately 

import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";


export default combineReducers({
     allCategory: categoryReducer,
     allBrand: brandReducer,
     subCategory: subCategoryReducer,
     allproducts: productsReducer,
     authReducer: authReducer

})

