
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

