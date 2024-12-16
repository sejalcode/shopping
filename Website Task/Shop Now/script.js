// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let listFav = document.querySelector('fav-items');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     // console.log('Cart opened');
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     // console.log('Cart closed');
//     body.classList.remove('active');
// })

// function onMenuClick() {
//     var navbar = document.getElementById("navigation-bar");
//     var responsive_class_name = "responsive";

//     navbar.classList.toggle(responsive_class_name);
// }
// let products = [
//     {
//         id: 1,
//         name: 'The Easywear Collection',
//         image: '1.JPEG',
//         price: 80000
//     },
//     {
//         id: 2,
//         name: 'Luxury/High-End',
//         image: '2.JPEG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'Green Threads',
//         image: '3.JPEG',
//         price: 150000
//     },
//     {
//         id: 4,
//         name: 'Comfy Couture',
//         image: '4.PNG',
//         price: 75000
//     },
//     {
//         id: 5,
//         name: 'Street Rebel',
//         image: '5.jpeg',
//         price: 45000
//     },
//     {
//         id: 6,
//         name: 'Elite Attire',
//         image: '6.jpg',
//         price: 180000
//     }
// ];



// let listCards  = [];
// let listFavorites = [];


// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }



// // ===== addto fav ===
// function addToFav(key) {
//   // debug 
//     console.log("Adding to favorites:", key);
//     if (!listFavorites[key]) {
       
//         listFavorites[key] = JSON.parse(JSON.stringify(products[key]));
//     }
//     console.log("Favorites list:", listFavorites);
//     reloadFav();
// }


// function reloadFav() {
//     console.log("reloadFav function is called");
//     let listFav = document.querySelector('.fav-items');
//     if (!listFav) {
//         console.error("Favorites list container not found");
//         return;
//     }
//     listFav.innerHTML = '';
//     listFavorites.forEach((value) => {
//         if (value) {
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}" alt="${value.name}" /></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>`;
//             listFav.appendChild(newDiv);
//         }
//     });
// }



// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let listFav = document.querySelector('.fav-items'); // Corrected selector
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

let products = [
    {id: 1, name: 'The Easywear Collection', image: '1.JPEG', price: 80000},
    {id: 2, name: 'Luxury/High-End', image: '2.JPEG', price: 120000},
    {id: 3, name: 'Green Threads', image: '3.JPEG', price: 150000},
    {id: 4, name: 'Comfy Couture', image: '4.PNG', price: 75000},
    {id: 5, name: 'Street Rebel', image: '5.jpeg', price: 45000},
    {id: 6, name: 'Elite Attire', image: '6.jpg', price: 180000}
];

let listCards = [];
let listFavorites = [];

function addToCard(key) {
    if (!listCards[key]) {
        listCards[key] = {...products[key], quantity: 1};
    }
    reloadCard();
}

function addToFav(key) {
    if (!listFavorites[key]) {
        listFavorites[key] = {...products[key]};
    }
    console.log("Favorites list:", listFavorites);
    reloadFav();
}

function reloadFav() {
    let listFav = document.querySelector('.fav-items');
    if (!listFav) {
        console.error("Favorites list container not found");
        return;
    }
    listFav.innerHTML = '';
    listFavorites.forEach((value) => {
        if (value) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" alt="${value.name}" /></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>`;
            listFav.appendChild(newDiv);
        }
    });
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;
        if (value) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" /></div>
                <div>${value.name}</div>
                <div>${(value.price * value.quantity).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
    }
    reloadCard();
}
