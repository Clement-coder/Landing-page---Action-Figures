import NavBar from "./components/NavBar"
import CharacterSections from "./components/CharacterSections"
import PreOrders from "./components/PreOrder"
import Trendinds from "./components/Trendinds"
import MostPopular from "./components/MostPopular"
import Footer from "./components/Footer"

const page = () => {
  return (
    <div>
      <NavBar/>
      <CharacterSections />
      <PreOrders/>
      <Trendinds/>
      <MostPopular/>
      <Footer/>
    </div>
  )
}

export default page
