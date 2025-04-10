import { useState, useEffect } from "react";
    import "../components/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API con retraso de 1 segundo
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Taza de Café", price: 50, offer: 30, url: "../../public/cafe.jpg",  },
        { id: 2, name: "Taza de Té", price: 30, offer: 15, url:  "../../public/te.webp"},
        { id: 3, name: "Vaso de Frappé", price: 70, offer: 50,  url: "../../public/frappe_.jpg"},
      ]);
    }, 1000);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
            <div className="img_container">
            <img src={product.url} alt="imagen del producto" />
            <button className="add" onClick={() => alert(`Agregado ${product.name}`)}>Agregar</button>
            </div>
          <h3>{product.name}</h3>
          <p> <s>${product.price}</s>  <span className="text_span">${product.offer}</span></p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

