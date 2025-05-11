import NavBar from "./components/NavBar"
import CharacterSections from "./components/CharacterSections"
import PreOrders from "./components/PreOrder"
import Trendinds from "./components/Trendinds"
import MostPopular from "./components/MostPopular"

const page = () => {
  return (
    <div>
      <NavBar/>
      <CharacterSections />
      <PreOrders/>
      <Trendinds/>
      <MostPopular/>
    </div>
  )
}

export default page
