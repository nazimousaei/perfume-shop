import Header from '../Components/Header'
import Category from '../Components/Category'
import BestSelling from '../Components/BestSelling'
import LastProduct from '../Components/LastProduct'
import AllProduct from '../Components/AllProduct'
import PopularBrand from '../Components/PopularBrands'
import Description from '../Components/Description'

export default function Home() {
  return (
    <div>
     <Header/>
     <Category/>
     <BestSelling/>
     <PopularBrand/>
     <AllProduct/>
     <Description/>
     <LastProduct/>
    </div>
  )
}
