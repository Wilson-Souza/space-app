import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/coming-soon-page";
import Inicio from "./pages/home-page";
import App from "./pages/standart-page";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="more-views" element={<ComingSoon />} />
          <Route path="more-likes" element={<ComingSoon />} />
          <Route path="newest" element={<ComingSoon />} />
          <Route path="surprise" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
