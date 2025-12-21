import React from "react";
import Layout from "./Layout.jsx";
import {
  Home,
  About,
  Contact,
  Cart,
  Products,
  CategoryProductData,
} from "./pages/Index.jsx";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<CategoryProductData />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
