const productosContainer = document.querySelector('.productsContainer');
const cart = document.querySelector('.cart');
const productListCart = document.querySelector('.productListCart')
const cartTitle = document.querySelector('.cartTitle');
const productsSelected = document.querySelector('.productsSelected');
productListCart.appendChild(productsSelected);

function createElementDom () {
    const buttonEmptyCart = document.querySelector('.vaciar');
    buttonEmptyCart.addEventListener('click', emptyCart)

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

        const titlesElements = productsSelected.getElementsByClassName('title');
        for(let i = 0; i < titlesElements.length ; i++ ){
            if(titlesElements[i].innerText === productTitle){
                const elementQuantity = titlesElements[i].parentElement.querySelector('.quantity');
                elementQuantity.value++;
                totalCartUpdate();
                return;
            };
        }
        
        const row =  document.createElement('div')
        const product = document.createElement('p');
        const price = document.createElement('p');
        const quantity = document.createElement('input');
        const subtotal = document.createElement('p');
        const buttonDelete = document.createElement('button');

        quantity.type = 'number';

        row.className = 'rowProduct';
        product.className = 'cartList title';
        price.className = 'cartList price';
        quantity.className = 'cartList quantity';
        subtotal.className = 'cartList subtotal';
        buttonDelete.className = 'cartList delete';

        productsSelected.appendChild(row);
        row.appendChild(product);
        row.appendChild(price);
        row.appendChild(quantity);
        row.appendChild(subtotal);
        row.appendChild(buttonDelete);    
        
        
        product.textContent = productTitle;
        price.textContent = productPrice;
        quantity.value = 1;
        quantity.max = 10;
        buttonDelete.textContent = 'X';

        row.querySelector('.delete').addEventListener('click', deleteRowItem);
        row.querySelector('.quantity').addEventListener('change', changeQuantity);
        totalCartUpdate();
    }

    function totalCartUpdate(e){

        let total = 0;
        let subtotal = 0;
        const totalCart = document.querySelector('.totalCart');
        const rowItemsCart = document.querySelectorAll('.rowProduct');
        
        
        rowItemsCart.forEach((rowItemCart) =>{
        
            const rowPriceElement = rowItemCart.querySelector('.price'); 
            const quantityElement = rowItemCart.querySelector('.quantity');
            const subtotalElement = rowItemCart.querySelector('.subtotal');

            const quantityValue = Number(quantityElement.value);
            const priceValue = Number(rowPriceElement.textContent.replace('$', ''));

            subtotal = quantityValue * priceValue;
            total = total + quantityValue * priceValue;

            subtotalElement.innerHTML = `$ ${subtotal}`;
            totalCart.innerHTML = `$ ${total.toFixed(2)}`;
            
        });
    
    }

    function deleteRowItem (e) { // me falta conseguir que al borrar el ultimo item del carrito me deje el total en $0
        const buttonDeleteclick = e.target;
        buttonDeleteclick.closest('.rowProduct').remove();

        totalCartUpdate();
    }

    function changeQuantity (e) {
        const changedQuantity = e.target;
        changedQuantity.value < 1 ? changedQuantity.value = 1 : null;
        totalCartUpdate();    
    };

    function emptyCart (e) {
        const removeRows = document.getElementById('productsSelected');

        while(removeRows.firstChild){
            removeRows.removeChild(removeRows.lastChild);
        }

        //totalCartUpdate();  
        
        const totalCart = document.querySelector('.totalCart'); // tengo que agregar estas dos lineas de codigo porque si llamo a la funcion totalCartUpdate()
        totalCart.innerHTML = '';                               // no me actualiza el valor total al vaciar el  carrito
        
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
        precio: 350.55
    },
    {
        nombre: "sopa",
        precio: 86.99
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