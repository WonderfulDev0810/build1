import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderEntry from "pages/OrderEntry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderEntry />} />
        <Route path="/order-entry" element={<OrderEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
