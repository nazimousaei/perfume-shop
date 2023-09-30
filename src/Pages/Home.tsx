import Header from '../Components/Header'
import Category from '../Components/Category'
import BestSelling from '../Components/BestSelling'
import LastProduct from '../Components/LastProduct'
import AllProduct from '../Components/AllProduct'

export default function Home() {
  return (
    <div>
     <Header/>
     <Category/>
     <BestSelling/>
     <AllProduct/>
     <LastProduct/>
    </div>
  )
}
