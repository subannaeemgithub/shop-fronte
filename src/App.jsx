import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './component/CartDrawer';
import { Navebar } from './component/Navebar';
import { Home } from './page/Home';
import Product from './page/Product';
import { showdata, showproduct, showfrutban, showgroceryban, showfrutprod, showgroceryprod } from './frontApi/Api';
import { FruteProduct } from './page/FruteProduct';
import GroceryProd from './page/GroceryProd';

function App() {
  const [banner, setBanner] = useState(null);
  const [products, setProducts] = useState([]);
  const [frutban, setFrutban] = useState(null);
  const [frutprod, setFrutprod] = useState([]);
  const [groceryban, setGroceryban] = useState(null);
  const [groceryprod, setGroceryprod] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fast parallel fetch: fetches banner and products simultaneously once at app start
    Promise.all([showdata(), showproduct(), showfrutban(), showfrutprod(), showgroceryban(), showgroceryprod()])
      .then(([bannerRes, productRes, frutbanRes, frutprodRes, grocerybanRes, groceryprodRes ]) => {
        if (bannerRes?.data && bannerRes.data.length > 0) {
          setBanner(bannerRes.data[0]);
        }
        if (productRes?.data) {
          setProducts(Array.isArray(productRes.data) ? productRes.data : [productRes.data]);
        }
        if (frutbanRes?.data && frutbanRes.data.length > 0) {
          // Handle frutban data if needed
          setFrutban(frutbanRes.data[0]);
        }
        if(frutprodRes?.data) {
          setFrutprod(Array.isArray(frutprodRes.data) ? frutprodRes.data : [frutprodRes.data]);
        }
        if (grocerybanRes?.data && grocerybanRes.data.length > 0) {
          // Handle groceryban data if needed
          setGroceryban(grocerybanRes.data[0]);
        }
        if(groceryprodRes?.data) {
          setGroceryprod(Array.isArray(groceryprodRes.data) ? groceryprodRes.data : [groceryprodRes.data]);
        }
      })
      .catch((err) => console.log('Error loading data:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navebar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home banner={banner} products={products} frutban={frutban} frutprod={frutprod} groceryban={groceryban} groceryprod={groceryprod} loading={loading} />} />
          <Route path="/30product" element={<Product banner={banner} products={products} loading={loading} />} />
          <Route path="/frutproduct" element={<FruteProduct frutban={frutban} frutprod={frutprod} />} />
          <Route path="/groceryprod" element={<GroceryProd groceryban={groceryban} groceryprod={groceryprod} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
