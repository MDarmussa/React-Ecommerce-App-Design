Ecommerce Full Stack Project:

- hooks folder: Is used for axios to deal with the API (GET, POST, DELETE ...etc)
- hook: Contains all functions and logic
- Page: Contain all the website pages
- components: Contain all components that belong to all pages
- API: Contain our states container
- rootReducer: contains all reducers as combined to send them to the store.js.
- store.js: contains all reducers (combined, middleware,)


steps for creating Redux, connecting to backend - the setup: // Barnd Section
Start with redux: this sample is for Admin add brands / panel
- check the endpoint in postman.
- create reducer file. ex: // src > Redux > reducers > brandReducers.
- type.js. ex: export const GET_ALL_BRAND = "GET_ALL_BRAND".  // Redux > type.js
- rootReducer. ex: allBrand: brandReducer. // src > Redux > reducers
- Action. create file to write methods. ex:  // src > Redux > action > brandAction.js
- hook: create folder. ex: brand. // hook > brand
- hook: create a file to contain all logics. ex: // src > hook > home-brand-hook.js
- import the hook in the component and loop over the element to return all items. ex: // src > components > Brand > Brandfeatured.js

steps for adding a product // Adding Product
- component > AdminAddProducts.js >  define all setStates, install a library to upload multiple images
- 




homePage
- Home Page branch has the homepage design and style using css and bootstrap

creating router:
- Component > Brand > BrandFeatured.js .. connect the route to the base route in app.js. ex: pathText="/allbrand"
- src > App.js .. add route. ex: <Route path="/allbrand" element={<AllBrandPage />} />
- src > component > Brand > BrandContainer.js .. add all brand cards. ex: <BrandCard img={brand1} /> // BrandCard need to be imported
- src > pages > Brand > AllBrandPage.js .. import BrandContainer

Resource & Links
- https://react-bootstrap.github.io/getting-started/introduction/
- https://fonts.google.com/about
- https://fontawesome.com/         //must register to use it
- https://www.npmjs.com/package/react-router-dom
- https://www.npmjs.com/package/react-paginate
- https://www.npmjs.com/package/unop-react-dropdown
- npmjs.com/package/react-image-gallery
- https://www.npmjs.com/package/react-rating-stars-component
- https://www.npmjs.com/package/multiselect-react-dropdown
- https://react-select.com/home     //not used
- https://react-bootstrap.netlify.app/components/spinners/    
- https://www.npmjs.com/package/react-detect-offline   not used / see add-subcategory-hook.js for an alternative way
- https://www.npmjs.com/package/react-multiple-image-input    used in admin page to add multiple image / add new item
- https://www.npmjs.com/package/react-color
- https://react-bootstrap.netlify.app/components/modal/#rb-docs-content // Modals dialogs
- https://mybrowseraddon.com/access-control-allow-origin.html?v=0.1.8&type=install
- https://www.noon.com/      cool website
- https://www.iconfinder.com/  



Branches:
redux1: redux axios
redux2: category section
redux3: brand section
redux4: sub category section
redux5: Product Section



TIP: both the following methods fire the state.(dispatch & useSelector)
*** useEffect *** > dispatch(*** action ***) 
*** useSelector *** > *** rootReducer ***

ex: in AdminProducts.js
- dispatch(getAllCategory()) // getAllCategory: categoryAction.js
- dispatch(getAllBrand()) //getAllBrand: brandAction.js

- const category = useSelector(state => state.allCategory.category) // allCategory: rootReducer.js, category: categoryReducer.js
- const brand = useSelector(state => state.allBrand.brand) // allBrand: rootReducer.js, brand: brandReducer.js