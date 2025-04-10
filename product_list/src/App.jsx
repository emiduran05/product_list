import React from "react";
import ProductList from "./components/ProductList";
import "../src/App.css";
function App() {
  return (
    <body>
      <div className="App">
        <div className="featured">
          <p className="text">Destacados</p>

          <div className="pharmacy">
            <h1>Escenciales Café Destacados</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque totam, in, amet praesentium ipsa similique id harum repudiandciis.
            </p>
          </div>

        </div>

        <div className="all_products">
          <p>Todos los Productos</p>
        </div>
        
      </div>

        <h2 className="title">Lista de Productos:</h2>

        <ProductList />
    </body>
  );
}

export default App;
