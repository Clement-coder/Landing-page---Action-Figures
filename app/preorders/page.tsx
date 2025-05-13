import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PreOrders from "../components/PreOrder";

const PreOrdersPage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold text-center mt-8">Pre-Orders Page</h1>
      <PreOrders/>
      <Footer/>
    </div>
  );
};

export default PreOrdersPage;
