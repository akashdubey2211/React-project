import React from "react";

import './App.css';
import Header from './components/Header';
import Acceseries from "./assets/Desktop-Accessories.jpg"
import Model5 from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"
import Items from './components/Items';
function App() {
  return (
    <div className="App">
   <Header/>
   <div className="app_itemsContainers" >
    <Items
    title="Lowest cost Solar panel in America"
    desc=" Money back guarantee"
    desclink=""
    backgroudImg={SolarPanels}
    leftBtnText="ORDER NOW"
    leftBtnLink=""
    rightBtnText="LEARN MORE"
    rightBtnLink=""
    twoButtons='true'
    first/>
      <Items
    title="Model S"
    desc="Starting at $69,420"
    desclink=""
    backgroudImg={Model5}
    leftBtnText="CUSTOM ORDER"
    leftBtnLink=""
    rightBtnText="EXISTING INVENTORY"
    rightBtnLink=""
    twoButtons='true'/>
      <Items
    title="Model 3"
    desc="Order Online for Touchless Delivery"
    desclink=""
    backgroudImg={Model3}
    leftBtnText="CUSTOM ORDER"
    leftBtnLink=""
    rightBtnText="EXISTING INVENTORY"
    rightBtnLink=""
    twoButtons='true'/>
      <Items
    title="Model X"
    desc="Order Online for Touchless Delivery"
    desclink=""
    backgroudImg={ModelX}
    leftBtnText="CUSTOM ORDER"
    leftBtnLink=""
    rightBtnText="EXISTING INVENTORY"
    rightBtnLink=""
    twoButtons='true'/>
      <Items
    title="Model Y"
    desc="Order Online for Touchless Delivery"
    desclink=""
    backgroudImg={ModelY}
    leftBtnText="CUSTOM ORDER"
    leftBtnLink=""
    rightBtnText="LEARN MORE"
    rightBtnLink=""
    twoButtons='true'/>
      <Items
    title="Solar for New Roofs"
    desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
    desclink=""
    backgroudImg={SolarRoof}
    leftBtnText="ORDER NOW"
    leftBtnLink=""
    rightBtnText="LEARN MORE"
    rightBtnLink=""
    twoButtons='true'/>
      <Items
    title="Accessories"
    desc="Money Back Gaurantee"
    desclink=""
    backgroudImg={Acceseries}
    leftBtnText="SHOP NOW"
    leftBtnLink=""
    rightBtnText="LEARN MORE"
    rightBtnLink=""
    twoButtons='true'/>
   </div>
    </div>
  );
}

export default App;
