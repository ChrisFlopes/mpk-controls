import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AOVSmokeVents from './components/product-pages/aov-smoke-vents';
import MechanicalAOVSystems from './components/product-pages/mechanical-aov-systems';
import ControlSparesAccessories from './components/product-pages/control-spares-accessories';
import FireLogic from './components/product-pages/fire-logic';
import MPKProVentStaircase from './components/package-pages/mpk-pro-vent-staircase';
import MPKProVentLobby from './components/package-pages/mpk-pro-vent-lobby';
import MPKOSOWindow from './components/package-pages/mpk-oso-window';
import MPKLAMLouver from './components/package-pages/mpk-lam-louver';
import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';  // Commented out until created
import AOVDampers from './components/product-pages/aov-dampers';
import PenthouseLouvers from './components/product-pages/penthouse-louvers';
import MPKZ1SingleZone from './components/product-pages/mpkz1-single-zone';
import MPKZMMultizone from './components/product-pages/mpkzm-multizone';
import MechanicalAOVControl from './components/product-pages/mechanical-aov-control';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/aov-smoke-vents" element={<AOVSmokeVents />} />
        <Route path="/mechanical-aov-systems" element={<MechanicalAOVSystems />} />
        <Route path="/control-spares-accessories" element={<ControlSparesAccessories />} />
        <Route path="/fire-logic" element={<FireLogic />} />
        <Route path="/mpk-pro-vent-staircase-packages" element={<MPKProVentStaircase />} />
        <Route path="/mpk-pro-vent-lobby-packages" element={<MPKProVentLobby />} />
        <Route path="/mpk-oso-window-packages" element={<MPKOSOWindow />} />
        <Route path="/mpk-lam-louver-staircase-packages" element={<MPKLAMLouver />} />
        <Route path="/aov-dampers" element={<AOVDampers />} />
        <Route path="/penthouse-louvers" element={<PenthouseLouvers />} />
        <Route path="/mpkz1-single-zone" element={<MPKZ1SingleZone />} />
        <Route path="/mpkzm-multizone" element={<MPKZMMultizone />} />
        <Route path="/mechanical-aov-control-panel" element={<MechanicalAOVControl />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App; 