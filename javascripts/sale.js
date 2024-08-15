let compras = [];
const cafes = [
  {
    id: 1,nombre: "Mezcla original 200g",precio: 500,cantidad: 0
  },
  {
    id: 2,nombre: "Mezcla original 500g",precio: 900,cantidad: 0
  },
  {
    id: 3,nombre: "Mezcla especial 200g",precio: 700,cantidad: 0
  },
  {
    id: 4,nombre: "Mezcla especial 500g",precio: 1200,cantidad: 0
  }
];

function calc() {
  const result = resultado();
  const envioValue = envio(result);
  alert(`Total de la orden: ${result}. Envío: ${envioValue}`);
  compras = [];
}

function resultado() {
  return compras.reduce((prev, compra)=>{
    return prev + compra.precio * compra.cantidad
  },0);
}

function envio(result) {
  let envio;
  if (result < 2000) {
    envio = 500;
  } else if (result >= 2000 && result < 3000) {
    envio = 250;
  } else {
    envio = 0;
  }
  return envio;
}

function add() {
  const id = parseInt(document.getElementById("product").value);
  const cant = parseInt(document.getElementById("number").value);
  const producto = cafes.find((cafe) => cafe.id === id);
  console.log(producto)
   if (producto) {
    const productoExistente = compras.find((compra) => compra.id === id);
    if (productoExistente) {
      productoExistente.cantidad += cant;
    } else{
      producto.cantidad = cant;
      compras.push(producto);
    }
    subtotal = mostrar();
    alert(`${subtotal} Total: ${resultado()}`);
  } else {
    alert("Producto no encontrado");
  }
}
function mostrar() {
  return compras.map(compra => {
    return `${compra.nombre} - ${compra.cantidad}`;
  }).join("\n");
}