const productosContainer = document.querySelector('.productsContainer');
const cart = document.querySelector('.cart');
const tableCart = document.querySelector('.tableCart');
const theadCart = document.querySelector('.theadCart');
const tbodyCart = document.querySelector('.tbodyCart');


function createElementDom () {
    productos.forEach(function (product) {
        const card = document.createElement('div');
        card.className='card';   
        const title = document.createElement('h2');
        title.textContent = product.nombre.toLocaleUpperCase();
        title.className = 'card-title'
        card.appendChild(title)
        const price = document.createElement('p');
        price.textContent = `$ ${product.precio}`;
        price.className = 'card-price';
        card.appendChild(price);
        const btnAdd = document.createElement('button');
        btnAdd.type ='button';
        card.appendChild(btnAdd);
        btnAdd.textContent = 'Add';
        btnAdd.className = 'addbtn';
        productosContainer.appendChild(card);
    })

    const buttonAddToCart = document.querySelectorAll('.addbtn');
    buttonAddToCart.forEach( (buttonCartAdd) => {
        buttonCartAdd.addEventListener('click', addToCart)  
    });

    function addToCart(e) {
        const button = e.target;
        const product = button.closest('.card')

        const productTitle = product.querySelector('.card-title').textContent;
        const productPrice = product.querySelector('.card-price').textContent;
        
        addProductToCart(productTitle, productPrice)
    };

    function addProductToCart(productTitle, productPrice){


        
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