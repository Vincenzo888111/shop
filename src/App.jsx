import Header from "./components/Header";
import Home from "./components/Home";
import PhoneCard from "./components/PhoneCard";
import Laptop from "./components/Laptop";
import Desktops from "./components/Desktops";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Payment from "./components/Payment";
// import Testcard from "./components/Testcard";
import Accesories from "./components/Accesories";
// import Event from "./components/Event";
import "./App.css";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [card, setCard] = useState([]);

  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const AddToCard = (product) => {
    setCard([...card, product]);
  };

  

  // 🖼 Move your images to: public/assets/
  // Example: public/assets/image1.png
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      details: "254",
      image: "src/assets/image copy.png",
    },
    {
      id: 2,
      name: "iPhone 17 Pro Max",
      details:
        "Explore the latest Samsung Galaxy smartphones, smartwatches, TVs, and home appliances built with cutting-edge technology.",
      image: "src/assets/image copy 2.png",
    },
    {
      id: 3,
      name: "iPhone 17 Pro Max",
      details:
        "Discover Google’s latest innovations in AI, Android, Pixel phones, and more.",
      image: "src/assets/image copy 3.png",
    },
    {
      id: 4,
      name: "iPhone Air",
      details:
        "Find Microsoft products including Windows, Surface, Xbox, and Office tools.",
      image: "src/assets/image copy 4.png",
    },
    {
      id: 5,
      name: "iPhone Air",
      details:
        "Discover the innovative world of Apple — iPhone, iPad, Mac, and more.",
      image: "src/assets/image copy 5.png",
    },
    {
      id: 6,
      name: "iPhone Air",
      details:
        "Explore the latest Samsung Galaxy smartphones, smartwatches, TVs, and more.",
      image: "src/assets/image copy 6.png",
    },
    {
      id: 7,
      name: "iPhone Air",
      details:
        "Discover Google’s innovations in AI, Android, Pixel, and smart home devices.",
      image: "src/assets/image copy 7.png",
    },
    {
      id: 8,
      name: "iPhone 17",
      details:
        "Find Microsoft products including Windows, Surface, and Office tools.",
      image: "src/assets/image copy 8.png",
    },
    {
      id: 9,
      name: "iPhone Air",
      details:
        "Explore Apple’s range of devices and entertainment accessories.",
      image: "src/assets/image copy 9.png",
    },
    {
      id: 10,
      name: "iPhone Air",
      details:
        "Explore the latest Samsung Galaxy smartphones, TVs, and appliances.",
      image: "src/assets/image copy 10.png",
    },
    {
      id: 11,
      name: "iPhone Air",
      details: "Discover Google’s innovations in AI, Android, Pixel, and more.",
      image: "src/assets/image copy 11.png",
    },
    {
      id: 12,
      name: "iPhone 17",
      details:
        "Find Microsoft products including Surface, Xbox, and Office tools.",
      image: "src/assets/image copy 12.png",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Header notification={card.length} />
      {/* Routes Login */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <PhoneCard products={products} AddToCard={AddToCard} />
              <Laptop />
              <Desktops />
              <Accesories/>
              {/* <Testcard/> */}
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
          {/* Routes Register */}
      <Routes>
        <Route path="/Register" element={<div><Register /></div>} />
      </Routes>
      
      {/* Routes Payment */}
      <Routes>
        <Route path="/Payment"  element={<div><Payment/></div>}/>
      </Routes>
      
    </div>
  );
}

export default App;
