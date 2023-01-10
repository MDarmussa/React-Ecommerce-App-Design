import BrandFeatured from '../../components/Brand/Brandfeatured'
import DiscountSection from '../../components/Home/DiscountSection'
import HomeCategory from '../../components/Home/HomeCategory'
import Slider from '../../components/Home/Slider'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import Footer from '../../components/Utilities/Footer'
import NavBarLogin from '../../components/Utilities/NavBarLogin'


function HomePage() {
  return (
    <div className='font' style={{minHeight: '670px'}}>
        <NavBarLogin />
        <Slider />
        <HomeCategory />
        <CardProductsContainer title='Most Sold' btnTitle='See More' />
        <DiscountSection />
        <CardProductsContainer title='Recent Fasion' btnTitle='See More' />
        <BrandFeatured title='Popular Brands' btnTitle='See More' />
        <Footer />
    </div>
  )
}

export default HomePage