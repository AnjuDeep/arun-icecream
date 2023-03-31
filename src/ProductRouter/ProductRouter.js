import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Bar from '../Pages/Products/Bar';
import Cups from '../Pages/Products/Cups';
import Ibar from '../Pages/Products/Ibar';
import Icone from '../Pages/Products/Icone';
import IbarMini from '../Pages/Products/IbarMini';
import Specialities from '../Pages/Products/Specialities';
import Tubs from '../Pages/Products/Tubs';
import BarFlav from '../Pages/Products/Flavours/BarFlav';
import CupsFlav from '../Pages/Products/Flavours/CupsFlav';
import IBarFlav from '../Pages/Products/Flavours/IBarFlav';
import IBarMiniFlav from '../Pages/Products/Flavours/IBarMiniFlav';
import IconeFlav from '../Pages/Products/Flavours/IconeFlav';
import TubFlav from '../Pages/Products/Flavours/TubFlav';
import SpecFlav from '../Pages/Products/Flavours/SpecFlav';


const ProductRouter = () => {
  return (
    <>
     <Routes>
        <Route path="Bar" element={<Bar/>}></Route>
        <Route path="Cups" element={<Cups/>}></Route>
        <Route path="Ibar" element={<Ibar/>}></Route>
        <Route path="Icone" element={<Icone/>}></Route>
        <Route path="IbarMini" element={<IbarMini/>}></Route>
        <Route path="Specialities" element={<Specialities/>}></Route>
        <Route path="Tubs" element={<Tubs/>}></Route>
        <Route path="BarFlav" element={<BarFlav/>}></Route>
        <Route path="CupsFlav" element={<CupsFlav/>}></Route>
        <Route path="IBarFlav" element={<IBarFlav/>}></Route>
        <Route path="IBarMiniFlav" element={<IBarMiniFlav/>}></Route>
        <Route path="IconeFlav" element={<IconeFlav/>}></Route>
        <Route path="TubFlav" element={<TubFlav/>}></Route>
        <Route path="SpecFlav" element={<SpecFlav/>}></Route>
      </Routes>
    </>
  )
}

export default ProductRouter