import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import DetailProductPage from "./Pages/DetailProductPage";
import DetailArticlePage from "./Pages/DetailArticlePage";
import ProductPage from "./Pages/ProductPage";
import ProductCategoryPage from "./Pages/ProductCategoryPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Articles" element={<ArticlePage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/Products/:category" element={<ProductCategoryPage/>} />
        <Route path="/Articles/:articleId" element={<DetailArticlePage />} />
        <Route path="/Product/:productId" element={<DetailProductPage />} />
        <Route path="*" element={<Navigate to="/" />} exact />
      </Routes>
    </Fragment>
  );
}

export default App;
