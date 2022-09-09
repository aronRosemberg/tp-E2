const pizzas = [

    {
    id:1,
    nombre:"Mozarella",
    ingredientes: ["queso mozarella", "prepizza", "salsa"], 
    precio:500,

    },

    {
        id:2,
        nombre:"Napolitana",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "tomates", "hojas de albahaca", "aceite de oliva"], 
        precio:1000,
    
    },

    {
        id:3,
        nombre:"Pepperoni",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "pepperoni"], 
        precio:8000,
    

    },

    {
        id:4,
        nombre:"Paisana",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "papas fritas", "huevos fritos","jamon"], 
        precio:1200,
    
    },

    {
        id:5,
        nombre:"Fugazzeta",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "cebolla", "oregano"], 
        precio:700,
    
    },

    {
        id:6,
        nombre:"Margarita",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "hojas de albahaca", "oregano", "aceite de oliva"], 
        precio:1000,
    
    },

    {
        id:7,
        nombre:"Cuatro quesos",
        ingredientes: ["queso mozarella", "prepizza", "salsa", "queso fontina", "queso gorgonzola", "queso parmesano"], 
        precio:950,
    
    },

]

const imprimirNumeroimpar = () =>
  pizzas.forEach((producto) => {
    if (producto.id % 2 == 1 ){
        console.log(`La pizza ${producto.nombre} cuyo ID es : ${producto.id}` )
    }
  }


);

// imprimirNombreimpar()

const imprimirPreciomenor = () =>
  pizzas.forEach((producto) => {
    if (producto.precio < 600 ){
        console.log(`La pizza ${producto.nombre} cuyo precio es : ${producto.precio} y es la más barata` )
    }
  }


);

// imprimirPreciomenor()


const imprimirNombres = () =>
  pizzas.forEach((producto) => {
    console.log   (`La pizzas disponibles son: ${producto.nombre}`   )             
    }


);


// imprimirNombres()


const imprimirPrecios = () =>
  pizzas.forEach((producto) => {
    console.log   (`El precio de la pizzas es: ${producto.precio}`   )             
    }


);

// imprimirPrecios()


const imprimirPreciosynombres = () =>
  pizzas.forEach((producto) => {
    console.log   (`El precio de la pizza ${producto.nombre} es: ${producto.precio}`   )             
    }


);

// imprimirPreciosynombres()


const div = document.getElementById("div1")

const nombre = document.getElementById("Nombre")

const precio = document.getElementById("Precio")

const input = document.getElementById("Input")

const boton = document.getElementById("Boton")





// Validamos si la pizza se encuentra en nuestra lista a traves del Id 
// Si la pizza fue encontrada completamos los campos de nombre y precio en el html

let obtenerInformacion = e => {
  e.preventDefault();
  let objetocapturado = input.value
    let valor = validarId(objetocapturado)
    
    if (!valor){
      alert("No existe el Id de la Pizza")
      return
  
    }
    


    let objetos = pizzas.find(variable => variable.id == Number(objetocapturado))


    nombre.innerHTML = `pizza : ${objetos.nombre}`;

    precio.innerHTML = `Precio :${objetos.precio}`;
 

} 



//  pre: Pasamos por parametros una lista y el valor de un id
//  pos: Verificamos que el valor de el idea se encuentre dentro de los valores de la lista y devolvemos un booleano

function validarId  ( inputid) {

  let resultado = pizzas.some(elemento => elemento.id == Number(inputid)) 
  return resultado

}



div.addEventListener("submit", obtenerInformacion ) ;
