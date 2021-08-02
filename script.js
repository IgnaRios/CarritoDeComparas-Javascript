const tablaProd = document.querySelector('#tablaProd')
const tbodyProd = document.querySelector('#tbodyProd')
const tBodyCart = document.querySelector('#tBodyCart')
const tableCO = document.querySelector('#tableCO')

function createElementDom  () {
productos.forEach(function (item){
    const row = document.createElement('tr')
    const tdproduct = document.createElement('td')
    const tdprice = document.createElement('td')
    tbodyProd.appendChild(row)
    row.appendChild(tdproduct)
    row.appendChild(tdprice)
    tdproduct.textContent = item.nombre
    tdprice.textContent = `$ ${item.precio} `
    const addButton = document.createElement('input')
    row.appendChild(addButton)
    addButton.type = 'button'
    addButton.value = "Agregar al Carrito"
    addButton.onclick = addToCart;
});
    function addToCart (e) {
        const row = document.createElement('tr')
        const tdSubTotalProducto = document.createElement('td')
        const tdSubtotalPrice = document.createElement('td')
        tBodyCart.appendChild(row)
        row.appendChild(tdSubTotalProducto)
        row.appendChild(tdSubtotalPrice)
        tdSubTotalProducto.textContent = tdproduct;
        tdSubtotalPrice.textContent = tdprice;
        console.log(tdSubtotalPrice)
        console.log(tdSubTotalProducto)
    }
}


const productos = [
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "pan",
        precio: 25
    },
    {
        nombre: "papa",
        precio: 52
    },
    {
        nombre: "palta",
        precio: 55
    },
    {
        nombre: "fideos",
        precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
        precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
        precio: 69
    },
    {
        nombre: "lentejas",
        precio: 85
    },
    {
        nombre: "mandarina",
        precio: 43
    },
    {
        nombre: "banana",
        precio: 79
    },
    {
        nombre: "leche de almendras",
        precio: 145
    },
    {
        nombre: "papel higiénico",
        precio: 147
    },
    {
        nombre: "lavandina",
        precio: 55
    },
    {
        nombre: "alcohol en gel",
        precio: 123
    },
    {
        nombre: "shampoo",
        precio: 400
    },
    {
        nombre: "arroz",
        precio: 66
    },
    {
        nombre: "salsa de tomate",
        precio: 35
    },

];


window.addEventListener('load', createElementDom)