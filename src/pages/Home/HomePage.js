import BrandFeatured from '../../components/Brand/Brandfeatured'
import DiscountSection from '../../components/Home/DiscountSection'
import HomeCategory from '../../components/Home/HomeCategory'
import Slider from '../../components/Home/Slider'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ViewHomeProductHook from '../../hook/products/view-home-product-hook'



function HomePage() {

  const [items] = ViewHomeProductHook();

  return (
    <div className='font' style={{minHeight: '670px'}}>
        
        <Slider />
        <HomeCategory />
        <CardProductsContainer products={items} title='Most Sold' btnTitle='See More' pathText='/products' />
        <DiscountSection />
        <CardProductsContainer products={items} title='Recent Fasion' btnTitle='See More' pathText='/products' />
        <BrandFeatured title='Popular Brands' btnTitle='See More' />
        
    </div>
  )
}

export default HomePage