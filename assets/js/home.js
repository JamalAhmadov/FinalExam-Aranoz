let product__box = document.getElementById('product__box')

let page = 1;
let limit = 4;


const renderProducts = async () => {
    const res = await fetch(`https://65745c66f941bda3f2afa6af.mockapi.io/products?page=${page}&limit=${limit}`);
    const data = await res.json()
    db = data;
    db.forEach(item => {
        let box__item = document.createElement('div')
        box__item.className = "box__item"
        box__item.innerHTML = `
        
        <div>
        <img src="${item.image}" alt="Quartz belt watch">
        </div>
        <h4>${item.name}</h4>
        <span>$ ${item.price}</span>
        <button onclick="addToBasket(${item.id})">Add to cart</button>
        <i  onclick="addToWish(${item.id})" class="fa-regular fa-heart"></i>
        `;
        product__box.append(box__item);
    });
}

renderProducts()



const addToBasket = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    newProduct = cart.find(item => item.id == id)

    if (newProduct) {
        newProduct.count = (newProduct.count || 1) + 1

    } else {
        cartProduct = db.find(item => item.id == id)
        cartProduct.count = 1;
        cart.push(cartProduct)
    }
    localStorage.setItem("cart", JSON.stringify(cart))

}
const addToWish = (id) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    newWish = wish.find(item => item.id == id)
    if (newWish) {
        alert("Alredy added")
    } else {
        wish.push(db.find(item => item.id == id))
        localStorage.setItem("wish", JSON.stringify(wish))
    }

}


// NAVBAR 

let dropmenu = document.getElementById('dropmenu')
let hamburger = document.getElementById('hamburger')

function navControl() {
    if (dropmenu.style.display == "none") {
        dropmenu.style.display = "block"


    } else {
        dropmenu.style.display = "none"
    }
}

hamburger.addEventListener('click', navControl)