//variable globales
let arregloProductos = [];

//clase producto
class Producto {
  // Constructor de la clase
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }
}
function eliminarProductos() {
  let Salir;
  let salida = true;
  do {
    Salir = prompt("¿Quiere eliminar un producto? Responda :S / N");
    if (Salir == "S" || Salir == "s") {
      let respuesta = prompt("Ingrese el nombre del producto a eliminar:");
      let eliminar = arregloProductos.findIndex(
        (producto) => producto.nombre == respuesta
      ); //buscamos la posicion en el array
      if (eliminar > -1) {
        arregloProductos.splice(eliminar, 1); //elimina el elemento seleccionado
      }
      if (eliminar == -1) {
        // si no se encontro el producto
        alert("No se encontro el producto");
      }
    }
    if (Salir == "N" || Salir == "n") {
      salida = false;
    }
  } while (salida); // no se sale de eliminar hasta que se ingresa N
}
function mostarProductos() {
  

  for (const recorrerArreglo of arregloProductos) {
    const div = document.createElement("div")
      div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;"> <div class="card-header">${recorrerArreglo.nombre}</div> <div class="card-body text-primary"> <h5 class="card-title">Precio: $${recorrerArreglo.precio}</h5> <p class="card-text">Stock:${recorrerArreglo.stock}</p></div></div>`
      document.body.appendChild(div)
  }
    
  
}
function ingresarProductos() {
  //se inicializan las variables
  let nombre = "";
  let precio = 0;
  let stock = 0;
  let salir = false;
  do {
    let pregunta = prompt("¿Quiere ingresar un producto? Responda :S / N");
    if (pregunta == "S" || pregunta == "s") {
      //se ingresan los datos del producto
      let nombreTemp = prompt("Ingrese el nombre del producto");
      let precioTemp = parseFloat(prompt("Ingrese el precio del producto"));
      let cantidad = parseInt(prompt("Ingrese el cantidad del producto"));
      let p = new Producto(nombreTemp, precioTemp, cantidad);
      arregloProductos.push(p); //se guarda en el array
    }
    if (pregunta == "N" || pregunta == "n") {
      salir = true;
    }
  } while (!salir); //no se sale del bucle hasta ingresar N
}
//programa principal
let salir = false;
do {
  let opcionElegida = parseInt(
    prompt(
      "Seleccione\n1: Ingresar Productos \n" +
        "2:Eliminar un productos \n" +
        "3: Ver todos los productos \n" +
        "4:Salir"
    )
  );

  switch (opcionElegida) {
    case 1:
      ingresarProductos();
      break;
    case 2:
      eliminarProductos();
      break;
    case 3:
      mostarProductos();
      salir= true;
      break;
    case 4:
      salir = true;
      break;
  }
} while (!salir);
console.log("Fin del programa");
