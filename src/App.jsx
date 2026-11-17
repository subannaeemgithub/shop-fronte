import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navebar } from './component/Navebar';
import { Home } from './page/Home';
import Product from './page/Product';
import { showdata, showproduct } from './frontApi/Api';

function App() {
  const [banner, setBanner] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fast parallel fetch: fetches banner and products simultaneously once at app start
    Promise.all([showdata(), showproduct()])
      .then(([bannerRes, productRes]) => {
        if (bannerRes?.data && bannerRes.data.length > 0) {
          setBanner(bannerRes.data[0]);
        }
        if (productRes?.data) {
          setProducts(Array.isArray(productRes.data) ? productRes.data : [productRes.data]);
        }
      })
      .catch((err) => console.log('Error loading data:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home banner={banner} products={products} loading={loading} />} />
        <Route path="/30product" element={<Product banner={banner} products={products} loading={loading} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
