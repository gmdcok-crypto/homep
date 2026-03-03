import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import BarcodePrinter from './pages/BarcodePrinter';
import BarcodePrinterDetail from './pages/BarcodePrinterDetail';
import RfidTag from './pages/RfidTag';
import RfidTagDetail from './pages/RfidTagDetail';
import DidMultiVision from './pages/DidMultiVision';
import DidMultiVisionDetail from './pages/DidMultiVisionDetail';
import ComputerPeripherals from './pages/ComputerPeripherals';
import ComputerPeripheralsDetail from './pages/ComputerPeripheralsDetail';
import Cctv from './pages/Cctv';
import CctvDetail from './pages/CctvDetail';
import PosPrinter from './pages/PosPrinter';
import PosPrinterDetail from './pages/PosPrinterDetail';
import About from './pages/About';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';

// Blue Solutions
import SmartLogistics from './pages/solutions/SmartLogistics';
import SmartHospital from './pages/solutions/SmartHospital';
import DigitalSignage from './pages/solutions/DigitalSignage';
import CctvSecurity from './pages/solutions/CctvSecurity';
import ItInfrastructure from './pages/solutions/ItInfrastructure';
import SmartMeal from './pages/solutions/SmartMeal';
import SmartMealPwaQr from './pages/solutions/SmartMealPwaQr';
import SmartMealZeroHardware from './pages/solutions/SmartMealZeroHardware';
import SmartMealCloudSettlement from './pages/solutions/SmartMealCloudSettlement';
import SmartMealFlow from './pages/solutions/SmartMealFlow';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/barcode-printer" element={<BarcodePrinter />} />
          <Route path="/products/barcode-printer/:id" element={<BarcodePrinterDetail />} />
          <Route path="/products/rfid-tag" element={<RfidTag />} />
          <Route path="/products/rfid-tag/:id" element={<RfidTagDetail />} />
          <Route path="/products/did-multivision" element={<DidMultiVision />} />
          <Route path="/products/did-multivision/:id" element={<DidMultiVisionDetail />} />
          <Route path="/products/computer-peripherals" element={<ComputerPeripherals />} />
          <Route path="/products/computer-peripherals/:id" element={<ComputerPeripheralsDetail />} />
          <Route path="/products/cctv" element={<Cctv />} />
          <Route path="/products/cctv/:id" element={<CctvDetail />} />
          <Route path="/products/pos-printer" element={<PosPrinter />} />
          <Route path="/products/pos-printer/:id" element={<PosPrinterDetail />} />
          <Route path="/about" element={<About />} />

          {/* Blue Solutions Routes */}
          <Route path="/solutions/logistics" element={<SmartLogistics />} />
          <Route path="/solutions/medical" element={<SmartHospital />} />
          <Route path="/solutions/signage" element={<DigitalSignage />} />
          <Route path="/solutions/security" element={<CctvSecurity />} />
          <Route path="/solutions/it-infra" element={<ItInfrastructure />} />
          <Route path="/solutions/smartmeal" element={<SmartMeal />} />
          <Route path="/solutions/smartmeal/pwa-qr" element={<SmartMealPwaQr />} />
          <Route path="/solutions/smartmeal/zero-hardware" element={<SmartMealZeroHardware />} />
          <Route path="/solutions/smartmeal/cloud-settlement" element={<SmartMealCloudSettlement />} />
          <Route path="/solutions/smartmeal/flow" element={<SmartMealFlow />} />
        </Routes>
      </Layout>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
