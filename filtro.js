document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ];
  //En general cambie las var por const y las "" por ''
  //cambie "lista-de-productos" por #lista-de-productos ya que en en el HTML esta declarado como un ID 
  const li = document.getElementById("lista-de-productos");
  //Quite el punto ya que input no es una clase si no una tag buscamos el primer elemento en el DOM que sea un <input>
  const $i = document.querySelector('input');
  const botonDeFiltro = document.querySelector('button');

  console.log('li es:', li); // debe mostrar el div#lista-de-productos
  //aqui cambie a una función y a un foreach
  function displayProductos(productos) {
    //para que se limpie que inicie vacia y quite el while para reducir codigo
    li.innerHTML = '';

    productos.forEach(producto => {
      const d = document.createElement('div');
      d.classList.add('producto');

      const ti = document.createElement('p');
      ti.classList.add('titulo');
      ti.textContent = producto.nombre;

      const imagen = document.createElement('img');
      imagen.setAttribute('src', producto.img);

      d.appendChild(ti);
      d.appendChild(imagen);
      li.appendChild(d);
    });
  }
  //Aqui nadamas agregue la función de toLowercase para que todo lo pase a minusculas y no haya problema despues entre difrenciar por mayusculas y minusculas
  const filtrado = (productos = [], texto) => {
    return productos.filter(item =>
      item.tipo.toLowerCase().includes(texto.toLowerCase()) ||
      item.color.toLowerCase().includes(texto.toLowerCase())
    );
  }

  botonDeFiltro.onclick = function() {
    const texto = $i.value.trim();//aqui elimine solo espacios 
    const productosFiltrados = filtrado(productos, texto);//aqui llamamos a la función de filtrado 
    displayProductos(productosFiltrados);
  }

  displayProductos(productos);
});
