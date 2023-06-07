import { useState } from "react";
import './App.css';
type Producto = {
  nombre: string;
  descripcion: string;
  precio: number;
};

const App = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [total, setTotal] = useState(0);

  const agregarProducto = () => {
    const nuevoProducto: Producto = {
      nombre,
      descripcion,
      precio: Number(precio),
    };
    setProductos([...productos, nuevoProducto]);
    setTotal(total + Number(precio));
    setNombre("");
    setDescripcion("");
    setPrecio("");
    
  };

  const eliminarProducto = (id: number) => {
    const productoEliminado = productos[id];
    setProductos(productos.filter((_, i) => i !== id));
    setTotal(total - productoEliminado.precio);
  };
  

  return (
    <div>
      <div>
        <h2>Agregar Producto</h2>
        <form>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label>Descripción:   </label>
            <input
              type="text"
              value={descripcion}
              placeholder="Descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div>
            <label>Precio:       </label>
            <input
              type="number"
              value={precio}
              placeholder="precio"
              onChange={(e) => setPrecio(e.target.value)}
              /> 
          </div>
          <br />
          <button
            type="button"
            className="boton"
            onClick={agregarProducto}
            disabled={!nombre || !precio}
            > Agregar Producto
          </button>
        </form>
      </div>
      <div>
        <h2>Carrito de Compras</h2>
        <p>Precio Total: $ {total}</p>
        <ul>
          {productos.map((producto,id) => (
            <li key={id}> 
            <strong> Nombre: </strong> {producto.nombre}
            <br />
            <strong> Descripcion: </strong> {producto.descripcion} 
            
            <br />
            <strong> Precio: </strong> {producto.precio}
            <br />
              <button 
              className="button" 
              type='button'
              onClick={() => eliminarProducto(id)}
              >
                Quitar Producto
                </button>
            </li>
          ))
          
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
