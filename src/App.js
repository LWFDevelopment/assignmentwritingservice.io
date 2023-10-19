import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Home/Home";
import OrderPage from "./OrderNow/OrderPage";
import ThankYou from "./ThankYou/ThankYou";
import PageNotFound from "./404/PageNotFound";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ordernow" element={<OrderPage/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
