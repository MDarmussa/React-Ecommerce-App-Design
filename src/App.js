import HomePage from './pages/Home/HomePage'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBarLogin from './components/Utilities/NavBarLogin';
import Footer from './components/Utilities/Footer';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AllCategoryPage from './pages/Category/AllCategoryPage';
import AllBrandPage from './pages/Brand/AllBrandPage';
import ShopProductsPage from './pages/Products/ShopProductsPage';
import ProductDetailsPage from './pages/Products/ProductDetailsPage';
import CartPage from './pages/Cart/CartPage';
import ChoosePayMethodPage from './pages/Checkout/ChoosePayMethodPage';
import AdminAllProductPage from './pages/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './pages/Admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './pages/Admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
import UserAllOrdersPage from './pages/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './pages/User/UserFavoriteProductsPage';
import UserAddAddressPage from './pages/User/UserAddAddressPage';
import UserProfilePage from './pages/User/UserProfilePage';
import UserEditAddressPage from './pages/User/UserEditAddressPage';
import UserAllAddressPage from './pages/User/UserAllAddresPage';
import AdminEditProductsPage from './pages/Admin/AdminEditProductsPage';
import ForgetpasswordPage from './pages/Auth/forgetpasswordPage';
import VerifyPasswordPage from './pages/Auth/verifyPasswordPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import AdminAddCouponPage from './pages/Admin/AdminAddCouponPage';
import AdminEditCouponPage from './pages/Admin/AdminEditCouponPage';
import AdminEditCategoryPage from './pages/Admin/AdminEditCategoryPage';
import ProtectedRouteHook from './hook/auth/protected-route-hook';
import ProtectedRoute from './components/Utilities/ProtectedRoute';
import ProductsByCategory from './pages/Products/ProductsByCategory';
import ProductByBrand from './pages/Products/ProductByBrand';


function App() {

  // console.log(JSON.parse(localStorage.getItem("user")))
  

  const [isUser, isAdmin, userData] = ProtectedRouteHook()
  console.log(userData)
  console.log(isUser)
  console.log(isAdmin)


  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
        
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          
          <Route path="/products/category/:id" element={<ProductsByCategory />} />
          <Route path="/products/brand/:id" element={<ProductByBrand />} />

          

          

          <Route path="/user/forget-password" element={<ForgetpasswordPage />} />  
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />  
          <Route path="/user/reset-password" element={<ResetPasswordPage/>} />  

          <Route path="/order/paymethod" element={ <ProtectedRoute auth={isUser}> <ChoosePayMethodPage /> </ProtectedRoute>} />



          <Route element={<ProtectedRoute auth={isAdmin} />} >
            <Route path="/admin/allproducts" element={<AdminAllProductPage /> } />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage/>} /> 
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage/>} /> 
            <Route path="/admin/editcategory/:id" element={<AdminEditCategoryPage/>} /> 
            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />} >
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAllAddressPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />  
            <Route path="/user/profile" element={<UserProfilePage />} />  
          </Route>
          

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
