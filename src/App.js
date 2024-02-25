import { AppBar, Toolbar, Container } from "@mui/material";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { ROUTES, SECTIONS } from "./constant";

import "./App.css";
import CodeIcon from "@mui/icons-material/Code";
import About from "./components/About.jsx";
import Mission from "./components/Mission.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <div className="name-wrapper">
              <CodeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <p>Landing page</p>
            </div>
            <div className="section-wrapper">
              {SECTIONS.map((section) => (
                <div
                  onClick={() => navigate(section.route)}
                  className="section"
                >
                  {section.name}{" "}
                </div>
              ))}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="App-header">
        <Routes>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MISSION} element={<Mission />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
