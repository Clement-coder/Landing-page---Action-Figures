import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MostPopular from "../components/MostPopular"


const ShopPage = () => {
  return (
    <div>
      <NavBar/>
      <h1 className="text-2xl font-bold text-center mt-8">Shopping Page</h1>
      <MostPopular/>
    <Footer/>
    </div>
  )
}

export default ShopPage
