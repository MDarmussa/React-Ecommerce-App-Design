import HomePage from './pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function App() {
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
          <Route path="/order/paymethod" element={<ChoosePayMethodPage />} />

          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />

          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
          <Route path="/user/profile" element={<UserProfilePage />} />  
          
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />  

          <Route path="/user/forget-password" element={<ForgetpasswordPage />} />  
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />  
          <Route path="/user/reset-password" element={<ResetPasswordPage/>} />  

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
